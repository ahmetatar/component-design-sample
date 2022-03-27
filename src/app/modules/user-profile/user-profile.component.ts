import { Component, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { UserProfile } from './user-profile.models';
import { UserProfileOptions, USER_PROFILE_OPTIONS } from './user-profile.options';

@Component({
  selector: 'desx-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserProfileComponent implements OnInit {
  @Input()
  options?: Partial<UserProfileOptions>;

  @Input()
  profile!: UserProfile;

  constructor(
    @Optional() @Inject(USER_PROFILE_OPTIONS) private defaultOptions: UserProfileOptions
  ) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
