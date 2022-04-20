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
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ToastComponent } from './components/toast/toast.component';
import { ModalComponent } from './components/modal/modal.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { LabelComponent } from './components/label/label.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CardComponent } from './components/card/card.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PopoversComponent } from './components/popovers/popovers.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ButtonGroupStylePipe } from './components/button-group/pipes/button-group-style.pipe';

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
    NavbarComponent,
    DropdownComponent,
    ToastComponent,
    ModalComponent,
    TooltipsComponent,
    LabelComponent,
    PaginationComponent,
    BadgeComponent,
    CardComponent,
    ButtonGroupComponent,
    ListGroupComponent,
    ProgressComponent,
    SpinnerComponent,
    PopoversComponent,
    CarouselComponent,
    ButtonGroupStylePipe,
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
