import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export abstract class ComponentBaseFixture {
  constructor(private debugEl: DebugElement) {}

  /**
   * Returns nativeElement of queried element
   * @param selector element selector
   * @returns NativeElement
   */
  public getElement<T>(selector: string) {
    const element = this.debugEl.query(By.css(selector));
    return element ? (element.nativeElement as T) : null;
  }

  /**
   * Returns nativeElement list of queried element
   * @param selector element selector
   * @returns NativeElement list
   */
  public getElementAll<T>(selector: string) {
    const elements = this.debugEl.queryAll(By.css(selector));
    return elements ? elements.map((el) => el.nativeElement as T) : null;
  }
}
