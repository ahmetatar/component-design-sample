import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonGroupSizes, ButtonGroupStyles } from './button-group.model';
import { ButtonGroupOptions, BUTTON_GROUP_OPTIONS } from './button-group.options';

@Component({
  selector: 'desx-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonGroupComponent implements OnInit {
  @Input()
  options?: Partial<ButtonGroupOptions>;

  @Input()
  size: ButtonGroupSizes = ButtonGroupSizes.Large;

  @Input()
  btnGroupStyle: ButtonGroupStyles = ButtonGroupStyles.Horizontal;

  constructor(@Inject(BUTTON_GROUP_OPTIONS) private defaultOptions: ButtonGroupOptions) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
