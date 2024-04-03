import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { countryDataResolver } from './widgets/widget-shared/services/country-data-resolver.resolver';
import { CountryWidgetComponent } from './widgets/country-widget/country-widget/country-widget.component';

const routes: Routes = [
  {
    path: '',
    component: CountryWidgetComponent,
    resolve: {
      countryData: countryDataResolver,
    },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./widgets/widget-admin/widget-admin.module').then(
        (m) => m.AdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
