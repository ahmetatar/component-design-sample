import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[desxAccordionContent]',
})
export class AccordionContentDirective {
  constructor(public tmplRef: TemplateRef<any>) {}
}
