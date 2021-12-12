import { Component, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { SocialButton } from './social-buttons.models';
import { SocialButtonOptions, SOCIAL_BUTTON_OPTIONS } from './social-buttons.options';

@Component({
  selector: 'desx-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SocialButtonsComponent implements OnInit {
  @Input()
  options?: Partial<SocialButtonOptions>;

  @Input()
  buttons: SocialButton[] = [];

  constructor(
    @Optional() @Inject(SOCIAL_BUTTON_OPTIONS) private defaultOptions: SocialButtonOptions
  ) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
