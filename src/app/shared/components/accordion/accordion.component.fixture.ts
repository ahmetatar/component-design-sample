import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class AccordionComponentFixture extends ComponentBaseFixture {
  protected readonly ACCORDION_FLUSH = '.accordion-flush';
  protected readonly ACCORDION_ITEMS = 'desx-accordion .accordion-item';
  protected readonly ACCORDION_BUTTONS = 'desx-accordion .accordion-button';
  protected readonly COLLAPSED = 'collapsed';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns whether the Accordion button is collapsed
   * @param el - accordion button
   */
  public isCollapsed(el: HTMLButtonElement) {
    return el && this.hasClass(el, this.COLLAPSED);
  }

  /**
   * Returns collapsable buttons under accordion items
   * @returns collapsable buttons
   */
  public getAccordionButtons(): HTMLButtonElement[] | null {
    return this.getElementAll(this.ACCORDION_BUTTONS);
  }

  /**
   * Returns collapsable button content of selected accordion item
   * @param el - selected accordion item
   * @returns collapsable button content
   */
  public getItemTextContent(el: HTMLDivElement | null) {
    return el && el.querySelector('h2 button')?.textContent;
  }

  /**
   * Returns accordion items
   * @returns { HTMLDivElement[] | null } HTMLDivElement array of accordion items
   */
  public getAccordionItems(): HTMLDivElement[] | null {
    return this.getElementAll(this.ACCORDION_ITEMS);
  }

  /**
   * Returns accordion flush container
   * @returns { HTMLDivElement | null } HTMLDivElement of accordion flush container
   */
  public getAccordionFlushContainer(): HTMLDivElement | null {
    return this.getElement(this.ACCORDION_FLUSH);
  }
}
