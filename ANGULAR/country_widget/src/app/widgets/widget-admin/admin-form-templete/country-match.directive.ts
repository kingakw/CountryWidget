import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import { CountriesNameService } from '../../widget-shared/services/countries-name.service';

@Directive({
  selector: '[appCountryMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CountryMatchValidatorDirective,
      multi: true,
    },
  ],
})
export class CountryMatchValidatorDirective implements Validator {
  constructor(private countriesNameService: CountriesNameService) {}

  validate(control: AbstractControl): ValidationErrors | null {
    const isExist = this.countriesNameService.isExist(control.value);
    return isExist ? { countryMatch: true } : null;
  }
}
