import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { EMPTY, Observable, map } from 'rxjs';

import CountryData from '../interfaces/country-data';
import { GetCountryDataService } from './country-data.service';


export const countryDataResolver: ResolveFn<CountryData[] | Observable<never>> = (
  route: ActivatedRouteSnapshot
  ) => {
  const router = inject(Router);
  const countryDataService = inject(GetCountryDataService);

  return countryDataService
  .getData$()
  .pipe(map((countryData: CountryData[]) => {
      if (countryData) {
        return countryData;
      } else {
        router.navigate(['']);
        return EMPTY;
      }
    }
  ));

};
