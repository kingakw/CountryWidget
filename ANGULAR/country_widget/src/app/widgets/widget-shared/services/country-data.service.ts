import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import CountryData from '../interfaces/country-data';
import { CountryFlag } from '../interfaces/country-flag';
import { CountryWidgetPreferences } from './country-widget-preferences.service';

@Injectable({ providedIn: 'root' })
export class GetCountryDataService {
  selectedCountry!: string;
  private apiUrl = 'https://restcountries.com/v3.1/name';
  queryParams = new HttpParams()
    .append(
      'fields',
      [
        'name',
        'capital',
        'subregion',
        'continents',
        'area',
        'population',
        'languages',
        'currencies',
        'flags',
      ].join(',')
    )
    .append('fullText', 'true');

  flagParams = new HttpParams()
    .append('fields', 'flags')
    .append('fullText', 'true');

  constructor(
    private http: HttpClient,
    private countryWidgetPreferences: CountryWidgetPreferences
  ) {}

  getData$(): Observable<CountryData[]> {
    let countryBhS = this.countryWidgetPreferences.getCountryBhS() ?? 'poland';
    const url = `${this.apiUrl}/${countryBhS}`;
    return this.http.get<CountryData[]>(url, { params: this.queryParams });
  }

  getFlag$(): Observable<CountryFlag[]> {
    const countryBhS = this.countryWidgetPreferences.getCountryBhS();
    const url = `${this.apiUrl}/${countryBhS}`;
    return this.http.get<CountryFlag[]>(url, { params: this.flagParams }).pipe(
      map((data) => {
        return Object.values(data);
      })
    );
  }
}
