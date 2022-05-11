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
import { BadgeBorderPipe } from './components/badge/pipes/badge-border.pipe';
import { BadgeModePipe } from './components/badge/pipes/badge-mode.pipe';
import { CardComponent } from './components/card/card.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PopoversComponent } from './components/popovers/popovers.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavComponent } from './components/navbar/nav/nav.component';
import { RouterModule } from '@angular/router';
import { NavBrandTextDirective } from './components/navbar/nav/directives/nav-brand-text.directive';
import { NavBrandDirective } from './components/navbar/nav/directives/nav-brand.directive';
import { NavLinkDirective } from './components/navbar/nav/directives/nav-link.directive';
import { NavItemDirective } from './components/navbar/nav/directives/nav-item.directive';
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
    BadgeBorderPipe,
    BadgeModePipe,
    CardComponent,
    ButtonGroupComponent,
    ListGroupComponent,
    ProgressComponent,
    SpinnerComponent,
    PopoversComponent,
    CarouselComponent,
    NavComponent,
    NavItemDirective,
    NavLinkDirective,
    NavBrandDirective,
    NavBrandTextDirective,
    ButtonGroupStylePipe,
  ],
  providers: [...DEFAULT_COMPONENT_OPTIONS],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [
    AccordionComponent,
    AccordionItemDirective,
    AccordionHeaderDirective,
    AccordionContentDirective,
    TextboxComponent,
    ButtonComponent,
    ImageComponent,
    BadgeComponent,
    BadgeBorderPipe,
    BadgeModePipe,
  ],
})
export class SharedModule {}
