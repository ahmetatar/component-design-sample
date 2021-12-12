import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from 'src/app/shared/testing/component.base-fixture';

export class SocialButtonsComponentFixture extends ComponentBaseFixture {
  protected readonly SOCIAL_BUTTONS = '.social-buttons desx-button';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns all button element under social buttons container
   * @returns {HTMLButtonElement[] | null} social button elements
   */
  public getButtons(): HTMLButtonElement[] | null {
    return this.getElementAll(this.SOCIAL_BUTTONS);
  }
}
