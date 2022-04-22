import { Directive } from '@angular/core';

/**
 * This directive abstracts bootstrap class implementation
 * and it applies .navbar-brand class to host element
 */
@Directive({
  selector: '[desxNavLink]',
  host: {
    class: 'nav-link',
  },
})
export class NavLinkDirective {}
