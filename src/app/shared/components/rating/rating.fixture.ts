import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class RatingFixture extends ComponentBaseFixture {
  protected readonly STAR = '.star-icon';
  protected readonly ACTIVE = '.active';
  protected readonly READONLY = '.readonly';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns svg star elements
   * @returns {SVGElement[] | null} SVGElement[]
   */
  public getStars(): SVGElement[] | null {
    return this.getElementAll(this.STAR);
  }

  /**
   * Returns .active applied svg star elements
   * @returns {SVGElement | null} SVGElement[]
   */
  public getActive(): SVGElement[] | null {
    return this.getElementAll(this.ACTIVE);
  }

  /**
   * Returns .c-pointer applied svg star element
   * @returns {SVGElement | null} SVGElement
   */
  public getReadonly(): SVGElement | null {
    return this.getElement(this.READONLY);
  }
}
