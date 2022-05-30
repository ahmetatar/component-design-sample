import { Component, OnInit, Input, ViewEncapsulation, Inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RatingOptions, RATING_OPTIONS } from './rating.options';

@Component({
  selector: 'desx-rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingComponent,
      multi: true,
    },
  ],
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  @Input() id!: string;

  @Input() options?: Partial<RatingOptions>;

  @Input() readonly: boolean = false;

  public stars = [1, 2, 3, 4, 5];
  private _value: number = 0;
  private onChange = (val: any) => {};
  private onTouch = () => {};

  constructor(@Inject(RATING_OPTIONS) private defaultOptions: RatingOptions) {}

  get value() {
    return this._value;
  }

  set value(val: number) {
    if (val !== undefined && val !== this._value) {
      this._value = val;
      this.onChange(val);
      this.onTouch();
    }
  }

  update(rate: number) {
    this.value = rate;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
