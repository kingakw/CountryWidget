import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CountryWidgetComponent } from './country-widget/country-widget.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryNameComponent } from './country-name/country-name.component';
import { CountryNativeNameComponent } from './country-native-name/country-native-name.component';

import {  WidgetSharedModule } from '../widget-shared/shared.module';

@NgModule({
  declarations: [
    CountryWidgetComponent,
    CountryDetailComponent,
    CountryNameComponent,
    CountryNativeNameComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    WidgetSharedModule
  ],
  exports: [
    CountryWidgetComponent,
  ]
})
export class CountryWidgetModule { }
