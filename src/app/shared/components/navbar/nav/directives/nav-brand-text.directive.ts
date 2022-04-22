import { Directive, TemplateRef } from '@angular/core';

/**
 * This directive abstracts bootstrap class implementation
 * and it applies .navbar-text class to host element. Also it provides
 * a template ref to place content of applied element in host navbar
 */
@Directive({
  selector: 'ng-template[desxNavBrandText]',
  host: {
    class: 'navbar-text',
  },
})
export class NavBrandTextDirective {
  constructor(public tmplRef: TemplateRef<any>) {}
}
