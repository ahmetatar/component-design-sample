import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';
import {
  BadgeBordersValues,
  BadgeColorsValues,
  BadgeShapesValues,
  BadgeTextColorsValues,
} from './badge.models';

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
    return this.getElement('.' + BadgeColorsValues[3]);
  }

  /**
   * Returns .rounded-pill applied badge element
   * @returns {HTMLSpanElement | null} HTMLSpanElement
   */
  public getRoundedPillBadge(): HTMLSpanElement | null {
    return this.getElement('.' + BadgeShapesValues[1]);
  }

  /**
   * Returns .text-dark applied badge element
   * @returns {HTMLSpanElement | null} HTMLSpanElement
   */
  public getTextDarkBadge(): HTMLSpanElement | null {
    return this.getElement('.' + BadgeTextColorsValues[1]);
  }

  /**
   * Returns .border-dark applied badge element
   * @returns {HTMLSpanElement | null} HTMLSpanElement
   */
  public getBorderDarkBadge(): HTMLSpanElement | null {
    return this.getElement('.border.' + BadgeBordersValues[1]);
  }
}
