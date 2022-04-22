import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '@app/shared/testing/component.base-fixture';
import { NavbarColors } from './navbar.models';
import { PlacementOptions } from './navbar.options';

export class NavbarComponentFixture extends ComponentBaseFixture {
  protected readonly NAVBAR = '.navbar';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns navbar
   * @returns navbar element
   */
  getNavbar() {
    return this.getElement(this.NAVBAR);
  }

  /**
   * Returns navbar element by color
   * @param color class of navbar
   */
  getNavbarByColor(color: NavbarColors) {
    return this.getElement(this.normalizeClass(color));
  }

  /**
   * Returns navbar element by placement option
   * @param placement option
   */
  getNavbarByPlacement(placement: PlacementOptions) {
    return this.getElement(this.normalizeClass(placement));
  }

  /**
   * Merges class names with dot char
   * @param cls string that contains class definations
   */
  private normalizeClass(cls: string) {
    return '.' + cls.split(' ').join('.');
  }
}
