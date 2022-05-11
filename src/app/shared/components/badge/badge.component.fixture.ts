import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class BadgeComponentFixture extends ComponentBaseFixture {
  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns span element which is the root element
   * @returns {HTMLSpanElement | null} HTMLSpanElement
   */
  public getBadge(): HTMLSpanElement | null {
    return this.getElement('span');
  }

  /**
   * Returns danger class applied badge element
   * @returns {HTMLSpanElement | null} HTMLSpanElement
   */
  public getDangerBadge(): HTMLSpanElement | null {
    return this.getElement('.bg-danger');
  }

  /**
   * Returns .rounded-pill applied badge element
   * @returns {HTMLSpanElement | null} HTMLSpanElement
   */
  public getRoundedPillBadge(): HTMLSpanElement | null {
    return this.getElement('.rounded-pill');
  }

  /**
   * Returns .text-dark applied badge element
   * @returns {HTMLSpanElement | null} HTMLSpanElement
   */
  public getTextDarkBadge(): HTMLSpanElement | null {
    return this.getElement('.text-dark');
  }
}
