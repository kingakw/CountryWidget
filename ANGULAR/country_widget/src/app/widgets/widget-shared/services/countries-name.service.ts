import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { COUNTRY } from '../interfaces/COUNTRY';
import { COUNTRIES } from '../interfaces/COUNTRIES';

@Injectable({ providedIn: 'root' })
export class CountriesNameService {
  getCountries(): Observable<COUNTRY[]> {
    const countries = of(COUNTRIES);
    return countries;
  }

  searchName(term: string | null): Observable<COUNTRY[]> {
    if (term === null || term.trim().length < 2) {
      return of([]);
    }
    const countries = COUNTRIES.filter((country) =>
      country.name.includes(term.trim())
    );
    return of(countries);
  }

  isExist(term: string | null): boolean {
    if (term === null || term.trim().length < 2) {
      return false;
    }
    const countries = COUNTRIES.filter((country) =>
      country.name.includes(term.trim())
    );
    return countries.length === 0;
  }

  isNotFullName(term: string | null): boolean {
    if (term === null || term.trim().length < 2) {
      return false;
    }
    const countries = COUNTRIES.filter((country) =>
      country.name === term
    );
    return countries.length === 0;
  }
}
