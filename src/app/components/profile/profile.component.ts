import { Component, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { ProfileOptions, PROFILE_OPTIONS } from './profile.options';

@Component({
  selector: 'desx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  @Input()
  options?: Partial<ProfileOptions>;

  // TODO will be set to default user image
  @Input()
  profileImage: string = '';

  @Input()
  userName: string = '';

  @Input()
  fullName: string = '';

  @Input()
  link?: string;

  constructor(@Optional() @Inject(PROFILE_OPTIONS) private defaultOptions: ProfileOptions) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
