import { Component, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { Profile } from './profile.models';
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

  @Input()
  profile?: Profile;

  constructor(@Optional() @Inject(PROFILE_OPTIONS) private defaultOptions: ProfileOptions) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
