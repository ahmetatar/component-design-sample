import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginStatusComponent } from './login-status/login-status.component';
import { ProfileComponent } from './profile/profile.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginStatusComponent,
    ProfileComponent,
    SocialButtonsComponent,
    StatisticsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    LoginComponent,
    LoginStatusComponent,
    ProfileComponent,
    SocialButtonsComponent,
    StatisticsComponent,
  ],
})
export class AppComponentsModule {}
