import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTemplateComponent } from './profile-template/profile-template.component';

@NgModule({
  declarations: [ProfileTemplateComponent],
  imports: [CommonModule],
  exports: [ProfileTemplateComponent],
})
export class TemplatesModule {}
