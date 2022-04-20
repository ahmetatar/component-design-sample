import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class ButtonGroupComponentFixture extends ComponentBaseFixture {
  protected readonly BUTTON_GROUP = '.btn-group';
  protected readonly TOOLBAR_BUTTON_GROUP = '.btn-toolbar';
  protected readonly LARGE_BUTTON_GROUP = '.btn-lg';
  protected readonly VERTICAL_BUTTON_GROUP = '.btn-group-vertical';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns .btn-group applied div element
   * @returns {HTMLDivElement | null} HTMLDivElement
   */
  public getButtonGroup(): HTMLDivElement | null {
    return this.getElement(this.BUTTON_GROUP);
  }

  /**
   * Returns .btn-toolbar-group applied div element
   * @returns {HTMLDivElement | null} HTMLDivElement
   */
  public getToolbarButtonGroup(): HTMLDivElement | null {
    return this.getElement(this.TOOLBAR_BUTTON_GROUP);
  }

  /**
   * Returns .btn-lg applied div element
   * @returns {HTMLDivElement | null} HTMLDivElement
   */
  public getLargeButtonGroup(): HTMLDivElement | null {
    return this.getElement(this.LARGE_BUTTON_GROUP);
  }

  /**
   * Returns .btn-group-vertical applied div element
   * @returns {HTMLDivElement | null} HTMLDivElement
   */
  public getVerticalButtonGroup(): HTMLDivElement | null {
    return this.getElement(this.VERTICAL_BUTTON_GROUP);
  }
}
