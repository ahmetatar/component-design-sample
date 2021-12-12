import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[desx-accordion-content]',
})
export class AccordionContentDirective {
  constructor(public tmplRef: TemplateRef<any>) {}
}
