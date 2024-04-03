import { GetCountryDataService } from '../../widget-shared/services/country-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

import CountryData from '../../widget-shared/interfaces/country-data';
import { FAVORITE } from '../../widget-shared/interfaces/FAVORITE';
import { FavoritesService } from '../../widget-shared/services/favorites.service';
import { CountryWidgetPreferences } from '../../widget-shared/services/country-widget-preferences.service';

@Component({
  selector: 'app-country-widget',
  templateUrl: './country-widget.component.html',
  styleUrls: ['./country-widget.component.scss'],
})
export class CountryWidgetComponent implements OnInit {
  countryData!: CountryData[];
  countryData$!: Observable<CountryData[]>;
  userFavorites: FAVORITE[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private countryWidgetPreferences: CountryWidgetPreferences,
    private getCountryDataService: GetCountryDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userFavorites = this.favoritesService.getFavorites();
    this.route.data.subscribe(data => {
      const countryData: CountryData[] = data['countryData'];
      this.countryData$ = of(countryData);
    })
  }

  setCurrentCountry(country: string){
    this.countryWidgetPreferences.setSelectedCountry(country);
    this.countryData$ = this.getCountryDataService
    .getData$()
    .pipe(map((data: CountryData[]) => this.countryData = data))
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }
}
