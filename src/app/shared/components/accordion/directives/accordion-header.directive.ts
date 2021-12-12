import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[desx-accordion-header]',
})
export class AccordionHeaderDirective {
  constructor(public tmplRef: TemplateRef<any>) {}
}
