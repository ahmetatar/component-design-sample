import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ProfileComponent, SocialButtonsComponent, StatisticsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfileComponent, SocialButtonsComponent, StatisticsComponent],
})
export class AppComponentsModule {}
