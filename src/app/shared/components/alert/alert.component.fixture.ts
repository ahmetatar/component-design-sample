import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class AlertComponentFixture extends ComponentBaseFixture {
  protected readonly ALERT_DISMISSIBLE = '.alert-dismissible';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns alert dismissible element
   * @returns {HTMLDivElement | null} HTMLDivElement of dismissible
   */
  public getDismissibleAlert(): HTMLDivElement[] | null {
    return this.getElement(this.ALERT_DISMISSIBLE);
  }
}
