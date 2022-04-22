import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '@app/shared/testing/component.base-fixture';

export class NavComponentFixture extends ComponentBaseFixture {
  protected readonly NAVBAR_COLLAPSE = '.navbar-collapse';
  protected readonly NAV_LINK = '.nav-link';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Gets navbar collapse element
   * @returns navbar container
   */
  public getNavbar() {
    return this.getElement(this.NAVBAR_COLLAPSE);
  }

  /**
   * Gets .nav-link class applied elements
   * @returns nav-link elements
   */
  public getNavLinks(): HTMLAnchorElement[] | null {
    return this.getElementAll(this.NAV_LINK);
  }
}
