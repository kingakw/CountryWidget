import { NgModule } from "@angular/core";

import HeaderComponent from "./widget-header/widget-header.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class WidgetSharedModule{}
