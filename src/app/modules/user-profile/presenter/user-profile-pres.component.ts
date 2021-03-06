import { Component, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { UserProfile } from './user-profile-pres.models';
import { UserProfilePresOptions, USER_PROFILE_PRES_OPTIONS } from './user-profile-pres.options';

@Component({
  selector: 'desx-user-profile-pres',
  templateUrl: './user-profile-pres.component.html',
  styleUrls: ['./user-profile-pres.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserProfilePresComponent implements OnInit {
  @Input()
  options?: Partial<UserProfilePresOptions>;

  @Input()
  profile!: UserProfile;

  constructor(
    @Optional() @Inject(USER_PROFILE_PRES_OPTIONS) private defaultOptions: UserProfilePresOptions,
  ) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
