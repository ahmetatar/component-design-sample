import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'desx-user-profile-cont',
  templateUrl: './user-profile-cont.component.html',
  styleUrls: ['./user-profile-cont.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UserProfileContComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
