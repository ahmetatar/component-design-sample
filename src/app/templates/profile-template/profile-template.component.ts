import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Profile } from '@components/profile/profile.models';
import { ProfileOptions } from '@components/profile/profile.options';

@Component({
  selector: 'desx-profile-template',
  templateUrl: './profile-template.component.html',
  styleUrls: ['./profile-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileTemplateComponent {
  @Input()
  options?: ProfileOptions;

  @Input()
  profile?: Profile;
}
