import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextboxSize, TextboxType } from './textbox.models';
import { TextboxOptions, TEXTBOX_OPTIONS } from './textbox.options';

@Component({
  selector: 'desx-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextboxComponent,
      multi: true,
    },
  ],
})
export class TextboxComponent implements OnInit, ControlValueAccessor {
  @Input()
  id: string = '';

  @Input()
  options?: Partial<TextboxOptions>;

  @Input()
  textboxType: TextboxType = 'text';

  @Input()
  size: TextboxSize = '';

  @Input()
  placeholder: string = '';

  @Input()
  label: string = '';

  @Input()
  validFeedback: string = '';

  @Input()
  invalidFeedback: string = '';

  @Input()
  parentForm?: FormGroup;

  get value() {
    return this._value;
  }

  set value(val: string) {
    if (val !== undefined && val !== this._value) {
      this._value = val;

      this.onChange(val);
      this.onTouch();
    }
  }

  private _value: string = '';
  private onChange = (val: any) => {};
  private onTouch = () => {};

  constructor(@Inject(TEXTBOX_OPTIONS) private defaultOptions: TextboxOptions) {}

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
