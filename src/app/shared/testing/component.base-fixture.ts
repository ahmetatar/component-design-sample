import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export abstract class ComponentBaseFixture {
  constructor(private debugEl: DebugElement) {}

  /**
   * Returns nativeElement of queried element
   * @param selector element selector
   * @returns nativeElement
   */
  protected getElement<T>(selector: string) {
    const element = this.debugEl.query(By.css(selector));
    return element ? (element.nativeElement as T) : null;
  }

  /**
   * Returns nativeElement list of queried element
   * @param selector element selector
   * @returns nativeElement list
   */
  protected getElementAll<T>(selector: string) {
    const elements = this.debugEl.queryAll(By.css(selector));
    return elements ? elements.map((el) => el.nativeElement as T) : null;
  }

  /**
   * Checks if an element has the specified class
   * @param token class identifier to search
   * @param element to control the class
   * @returns true if class is found otherwise false
   */
  protected hasClass(element: HTMLElement, token: string) {
    return element.classList.contains(token);
  }

  /**
   * Returns the given attribute value of the element
   * @param attr quelified name
   * @param element to control the attribute
   * @returns attribute value
   */
  protected getAttributeValue(element: HTMLElement, attr: string) {
    return element.getAttribute(attr);
  }
}
