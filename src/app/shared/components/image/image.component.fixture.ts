import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class ImageComponentFixture extends ComponentBaseFixture {
  protected readonly IMAGE_FLUID_SELECTOR = '.img-fluid';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns .img-fluid applied input element
   * @returns {HTMLImageElement | null}
   */
  public getImage(): HTMLImageElement | null {
    return this.getElement(this.IMAGE_FLUID_SELECTOR);
  }
}
