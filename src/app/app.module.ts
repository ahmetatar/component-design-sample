import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './modules/profile/profile.component';
import { SocialButtonsComponent } from './modules/social-buttons/social-buttons.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { UserProfileComponent } from './templates/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SocialButtonsComponent,
    StatisticsComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
