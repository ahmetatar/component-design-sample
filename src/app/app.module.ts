import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '@components/profile/profile.component';
import { SocialButtonsComponent } from '@components/social-buttons/social-buttons.component';
import { StatisticsComponent } from '@components/statistics/statistics.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { LoginStatusComponent } from '@components/login-status/login-status.component';
import { LoginComponent } from '@components/login/login.component';
import { ProfileTemplateComponent } from './templates/profile-template/profile-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SocialButtonsComponent,
    StatisticsComponent,
    UserProfileComponent,
    LoginStatusComponent,
    LoginComponent,
    ProfileTemplateComponent,
  ],
  imports: [BrowserModule, CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
