import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[desxAccordionHeader]',
})
export class AccordionHeaderDirective {
  constructor(public tmplRef: TemplateRef<any>) {}
}
