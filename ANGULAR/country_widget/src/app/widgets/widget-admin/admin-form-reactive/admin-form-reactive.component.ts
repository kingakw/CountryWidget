import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { CountriesNameService } from '../../widget-shared/services/countries-name.service';
import { CountryWidgetPreferences } from '../../widget-shared/services/country-widget-preferences.service';
import { COUNTRY } from '../../widget-shared/interfaces/COUNTRY';
import { FavoritesService } from '../../widget-shared/services/favorites.service';
import { FAVORITE } from '../../widget-shared/interfaces/FAVORITE';

@Component({
  selector: 'app-admin-form-reactive',
  templateUrl: './admin-form-reactive.component.html',
  styleUrls: ['./admin-form-reactive.component.scss']
})
export class AdminFormReactiveComponent implements OnInit {

  languages = ['english', 'native language'];
  userFavorites: FAVORITE[] = [];
  subscription: any;

  chooseCountryForm!: FormGroup;
  showFlag!: FormControl;

  constructor(
    private countryWidgetPreferences: CountryWidgetPreferences,
    private countriesNameService: CountriesNameService,
    private favoritesService: FavoritesService
    ) {}

  ngOnInit(): void {
    this.userFavorites = this.favoritesService.getFavorites();
    this.chooseCountryForm = new FormGroup({
      'countrySearch': new FormGroup({
        'language': new FormControl('', Validators.required),
        'searchinput': new FormControl('',
        [ Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          this.isCountry.bind(this),
          this.isFullName.bind(this)])
      }),
      'newFavorites': new FormArray([])
    });
    this.showFlag = new FormControl(Boolean);
    this.onChanges();
  }

  onAddFav(){
    if (this.userFavorites.length >= 3){ return; }

    const favoriteControl = new FormControl(null,
    [ Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      this.isCountry.bind(this),
      this.isFullName.bind(this),
    ]);
    (this.chooseCountryForm.get('newFavorites') as FormArray).push(favoriteControl);
  }

  getControls(){
    return (this.chooseCountryForm.get('newFavorites') as FormArray).controls;
  }

  removeFav(i: number) {
    (this.chooseCountryForm.controls['newFavorites'] as FormArray).removeAt(i);
  }

  isCountry(control:FormControl): {[k:string]: boolean} | null {
    const isCountryExist = this.countriesNameService.isExist(control.value);
    return isCountryExist ? { 'noTermMatch': true } : null;
  }

  isFullName(control:FormControl): {[k:string]: boolean} | null {
    const isFull = this.countriesNameService.isNotFullName(control.value);
    return isFull ? { 'noFullName': true } : null;
  }

  onChanges(): void {
    this.subscription = this.showFlag.valueChanges.subscribe(val =>
      this.countryWidgetPreferences.setShowFlag(val))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }

  randomCountry() {
    const allCountriesArray: COUNTRY[] = [];
    this.countriesNameService
      .getCountries()
      .subscribe((val) => allCountriesArray.push(...val));
    const randomCountry =
      allCountriesArray[Math.floor(Math.random() * allCountriesArray.length)];

    this.chooseCountryForm.patchValue({
      'countrySearch': {
        'searchinput': randomCountry.name
      }
    });
  }

  setCountry(country: string){
    this.chooseCountryForm.patchValue({
      'countrySearch': {
        'searchinput': country
      }
    });
  }

  deleteFav(country: string){
    this.favoritesService.delFavorite(country);
  }

  onSubmit() {
    this.chooseCountryForm.value.newFavorites.forEach((el: string) => {
      if((el !== null)&& !this.countriesNameService.isNotFullName(el)){
        this.favoritesService.addFavorite(el)
      }
    });

    (this.chooseCountryForm.controls['newFavorites'] as FormArray).clear();
    const newCountryName = this.chooseCountryForm.value.countrySearch.searchinput;
    const newLanguage = this.chooseCountryForm.value.countrySearch.language;
    this.countryWidgetPreferences.setSelectedCountry(newCountryName);
    this.countryWidgetPreferences.setSelectedLanguage(newLanguage);
  }

}
