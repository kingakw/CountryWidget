import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryWidgetPreferences {
  private _selectedCountry$ = new BehaviorSubject<string>('');
  private _selectedLanguage$ = new BehaviorSubject<string>('');
  private _showFlag$ = new BehaviorSubject<boolean>(true);

  constructor(){
    this.loadCountryFromLocalStorage();
  }

  loadCountryFromLocalStorage(){
    const country = localStorage.getItem('country');
    const language = localStorage.getItem('language');

    if (country){
      this._selectedCountry$.next(country);
    }
    if (language){
      this._selectedLanguage$.next(language);
    }
  }

  selectedCountry$(): Observable<string> {
    return this._selectedCountry$.asObservable();
  }

  selectedLanguage$(): Observable<string> {
    return this._selectedLanguage$.asObservable()
  }

  showFlag$(): Observable<boolean> {
    return this._showFlag$.asObservable()
  }

  getCountryBhS() {
    return this._selectedCountry$.value;
  }

  setSelectedCountry(country: string) {
    this._selectedCountry$.next(country);
    localStorage.setItem('country', country);
  }

  getLanguage() {
    return this._selectedLanguage$.value;
  }

  setSelectedLanguage(lang: string) {
    this._selectedLanguage$.next(lang);
    localStorage.setItem('language', lang);
  }

  checkShowFlag() {
    return this._showFlag$.value;
  }

  setShowFlag(value: boolean) {
    this._showFlag$.next(value);
  }
}
