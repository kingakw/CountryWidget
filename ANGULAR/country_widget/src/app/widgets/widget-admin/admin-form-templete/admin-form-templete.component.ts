import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { CountryWidgetPreferences } from '../../widget-shared/services/country-widget-preferences.service';
import { COUNTRY } from '../../widget-shared/interfaces/COUNTRY';
import { CountriesNameService } from '../../widget-shared/services/countries-name.service';
import { CountryPrefered } from '../../widget-shared/interfaces/country-prefered';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-form-templete',
  templateUrl: './admin-form-templete.component.html',
  styleUrls: ['./admin-form-templete.component.scss'],
})
export class AdminFormTempleteComponent implements OnInit {
  @ViewChild('form') setCountry!: NgForm;

  countries$!: Observable<COUNTRY[]>;
  private searchTerm$ = new Subject<string>();

  languages: string[] = ['english', 'native language'];

  myCountryPrefered: CountryPrefered = {
    name: 'poland',
    language: this.languages[0],
  };

  constructor(
    private countryWidgetPreferences: CountryWidgetPreferences,
    private countriesNameService: CountriesNameService,
    private router: Router
  ) {}

  search(term: string): void {
    this.searchTerm$.next(term);
  }

  ngOnInit(): void {
    this.countries$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.countriesNameService.searchName(term))
    );
  }

  randomCountry() {
    const allCountriesArray: COUNTRY[] = [];
    this.countriesNameService
      .getCountries()
      .subscribe((val) => allCountriesArray.push(...val));
    const randomCountry =
      allCountriesArray[Math.floor(Math.random() * allCountriesArray.length)];

    this.setCountry.form.patchValue({
      newCountry: {
        searchInput: randomCountry.name,
      },
    });
  }

  chooseCountry(country: string) {
    this.setCountry.form.patchValue({
      newCountry: {
        searchInput: country,
      },
    });
    this.searchTerm$.next('');
  }

  onSubmit() {
    const newCountryName = this.setCountry.value.newCountry.searchInput;
    const newLanguage = this.setCountry.value.newCountry.language;

    this.countryWidgetPreferences.setSelectedCountry(newCountryName);
    this.countryWidgetPreferences.setSelectedLanguage(newLanguage);
    this.router.navigate(['/']);
  }
}
