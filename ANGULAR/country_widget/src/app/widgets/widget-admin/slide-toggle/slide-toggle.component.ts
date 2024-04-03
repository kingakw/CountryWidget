import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SlideToggleComponent),
      multi: true,
    },
  ],
})

export class SlideToggleComponent implements ControlValueAccessor {
  @Input() checkedText!: string;
  @Input() uncheckedText!: string;
  isChecked = false;
  isTouched = false;
  onChange!: (isChecked: boolean) => void;
  onTouch!: () => void;

  writeValue(checked: boolean): void {
    this.isChecked = checked;
  }

  registerOnChange(onChange: (isChecked: boolean) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  toggle(): void {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked) ;

    if (!this.isTouched) {
      this.isTouched = true;
      this.onTouch();
    }
  }
}

