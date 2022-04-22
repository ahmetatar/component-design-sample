import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarColor, NavbarColors } from './navbar.models';
import { NavbarOptions, NAVBAR_OPTIONS } from './navbar.options';

@Component({
  selector: 'desx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  @Input()
  options?: Partial<NavbarOptions>;

  @Input()
  color: NavbarColor = NavbarColors.LIGHT;

  constructor(@Inject(NAVBAR_OPTIONS) private defaultOptions: NavbarOptions) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
