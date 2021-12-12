import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class AccordionComponentFixture extends ComponentBaseFixture {
  protected readonly ACCORDION_FLUSH = '.accordion-flush';
  protected readonly ACCORDION_ITEMS = 'desx-accordion .accordion-item';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns accordion items
   * @returns {HTMLDivElement[] | null} HTMLDivElement array of accordion items
   */
  public getAccordionItems(): HTMLDivElement[] | null {
    return this.getElementAll(this.ACCORDION_ITEMS);
  }

  /**
   * Returns accordion flush container
   * @returns {HTMLDivElement | null} HTMLDivElement of accordion flush container
   */
  public getAccordionFlushContainer(): HTMLDivElement | null {
    return this.getElement(this.ACCORDION_FLUSH);
  }
}
