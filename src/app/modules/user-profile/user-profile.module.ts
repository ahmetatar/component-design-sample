import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilePresComponent } from './presenter/user-profile-pres.component';
import { TemplatesModule } from '@templates/templates.module';
import { SharedModule } from '@app/shared/shared.module';
import { AppComponentsModule } from '@components/app-components.module';
import { UserProfileContComponent } from './container/user-profile-cont.component';

@NgModule({
  declarations: [UserProfilePresComponent, UserProfileContComponent],
  imports: [CommonModule, TemplatesModule, SharedModule, AppComponentsModule],
  exports: [UserProfilePresComponent],
})
export class UserProfileModule {}
