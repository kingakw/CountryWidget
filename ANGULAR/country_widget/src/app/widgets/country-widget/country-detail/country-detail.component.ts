import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import CountryData from '../../widget-shared/interfaces/country-data';
import { CountryWidgetPreferences } from '../../widget-shared/services/country-widget-preferences.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent {
  @Input() countryData!: Observable<CountryData[]>;

  constructor(
    private countryWidgetPreferences: CountryWidgetPreferences
  ) {}

  selectedLanguage = this.countryWidgetPreferences.getLanguage();

}
