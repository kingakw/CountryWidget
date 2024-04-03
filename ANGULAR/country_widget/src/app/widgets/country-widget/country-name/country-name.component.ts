import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import CountryData from '../../widget-shared/interfaces/country-data';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-country-name',
  templateUrl: './country-name.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryNameComponent {
  @Input() countryData!: Observable<CountryData[]>;
}
