import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import CountryData from '../../widget-shared/interfaces/country-data';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-country-native-name',
  templateUrl: './country-native-name.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryNativeNameComponent {
  @Input() countryData!: Observable<CountryData[]>;
}
