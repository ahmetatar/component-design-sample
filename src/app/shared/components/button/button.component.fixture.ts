import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class ButtonComponentFixture extends ComponentBaseFixture {
  protected readonly OUTLINED_PRIMARY_BUTTON = '.btn-outline-primary';
  protected readonly LARGE_BUTTON = '.btn-lg';
  protected readonly WARNING_BUTTON = '.btn-warning';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns .btn-warning applied button element
   * @returns {HTMLButtonElement | null} HTMLButtonElement
   */
  public getWarningButton(): HTMLButtonElement | null {
    return this.getElement(this.WARNING_BUTTON);
  }

  /**
   * Returns .btn-lg applied button element
   * @returns {HTMLButtonElement | null} HTMLButtonElement
   */
  public getLargeButton(): HTMLButtonElement | null {
    return this.getElement(this.LARGE_BUTTON);
  }

  /**
   * Returns outlined primary button element
   * @returns {HTMLButtonElement | null} HTMLButtonElement
   */
  public getOutlinedPrimaryButton(): HTMLButtonElement | null {
    return this.getElement(this.OUTLINED_PRIMARY_BUTTON);
  }
}
