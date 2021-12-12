import { NgModule } from '@angular/core';
import { AccordionComponent } from './components/accordion/accordion.component';
import { DEFAULT_COMPONENT_OPTIONS } from './components/components.config';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { AccordionHeaderDirective } from './components/accordion/directives/accordion-header.directive';
import { AccordionContentDirective } from './components/accordion/directives/accordion-content.directive';
import { AccordionItemDirective } from './components/accordion/directives/accordion-item.directive';
import { AlertComponent } from './components/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxComponent } from './components/textbox/textbox.component';
import { ImageComponent } from './components/image/image.component';
import { ButtonStylePipe } from './components/button/pipes/button-style.pipe';

@NgModule({
  declarations: [
    AccordionComponent,
    ButtonComponent,
    AccordionHeaderDirective,
    AccordionContentDirective,
    AccordionItemDirective,
    AlertComponent,
    TextboxComponent,
    ImageComponent,
    ButtonStylePipe,
  ],
  providers: [...DEFAULT_COMPONENT_OPTIONS],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    AccordionComponent,
    AccordionItemDirective,
    AccordionHeaderDirective,
    AccordionContentDirective,
    TextboxComponent,
    ButtonComponent,
    ImageComponent,
  ],
})
export class SharedModule {}
