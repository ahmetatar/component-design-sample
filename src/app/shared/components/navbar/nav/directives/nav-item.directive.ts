import { Directive, TemplateRef } from '@angular/core';

/**
 * This directive provides a template ref to access
 * the content of each element to be repeated in the navbar.
 */
@Directive({
  selector: 'ng-template[desxNavItem]',
})
export class NavItemDirective {
  constructor(public tmplRef: TemplateRef<any>) {}
}
