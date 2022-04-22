import { Directive } from '@angular/core';

/**
 * This directive abstracts bootstrap class implementation
 * and it applies .navbar-brand class to host element
 */
@Directive({
  selector: '[desxNavBrand]',
  host: {
    class: 'navbar-brand',
  },
})
export class NavBrandDirective {}
