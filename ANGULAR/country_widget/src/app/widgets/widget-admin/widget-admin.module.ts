import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AdminFormTempleteComponent } from "./admin-form-templete/admin-form-templete.component";
import { CountryMatchValidatorDirective } from "./admin-form-templete/country-match.directive";
import { AdminFormReactiveComponent } from "./admin-form-reactive/admin-form-reactive.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { AdminRoutigModule } from "../widget-shared/services/widget-admin-routing.module";
import { WidgetSharedModule } from "../widget-shared/shared.module";

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminFormTempleteComponent,
    CountryMatchValidatorDirective,
    AdminFormReactiveComponent,
    SlideToggleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutigModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetSharedModule
  ],
})
export class AdminModule {}
