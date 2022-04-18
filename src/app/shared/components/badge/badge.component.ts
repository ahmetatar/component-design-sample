import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BadgeColors, BadgeShapes, BadgeTextColors } from './badge.models';
import { BadgeOptions, BADGE_OPTIONS } from './badge.options';

@Component({
  selector: 'desx-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BadgeComponent implements OnInit {
  @Input() options?: Partial<BadgeOptions>;
  @Input() text: string = '';
  @Input() color: BadgeColors = 'bg-primary';
  @Input() shape: BadgeShapes = '';
  @Input() textColor: BadgeTextColors = '';

  constructor(@Inject(BADGE_OPTIONS) private defaultOptions: BadgeOptions) {}

  ngOnInit() {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
