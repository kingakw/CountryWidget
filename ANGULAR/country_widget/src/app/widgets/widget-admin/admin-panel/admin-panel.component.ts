import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CountryWidgetPreferences } from '../../widget-shared/services/country-widget-preferences.service';
import { GetCountryDataService } from '../../widget-shared/services/country-data.service';
import { CountryFlag } from '../../widget-shared/interfaces/country-flag';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {

  flagData: CountryFlag[] = [];
  setFlag!: boolean;
  flagUrl: string = '';

  constructor(
    private countryWidgetPreferences: CountryWidgetPreferences,
    private getCountryDataService: GetCountryDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCountryDataService.getFlag$()
    .subscribe((data) => {
      this.flagData = data;
      this.flagUrl = this.flagData[0].flags.svg;
    });
  }

  setWidgetCountry(country: string) {
    this.countryWidgetPreferences.setSelectedCountry(country);
  }

  setBackground() {
    this.setFlag = this.countryWidgetPreferences.checkShowFlag();
    return this.setFlag === true ? `url( ${this.flagUrl} )` : '';
  }

  goToWidget() {
    this.router.navigate(['/']);
  }
}
