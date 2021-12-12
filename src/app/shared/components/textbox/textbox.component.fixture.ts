import { DebugElement } from '@angular/core';
import { ComponentBaseFixture } from '../../testing/component.base-fixture';

export class TextboxComponentFixture extends ComponentBaseFixture {
  protected readonly FORM_CONTROL = '.form-control';
  protected readonly FLOATING_LABELED_FORM_CONTROL = '.form-floating';
  protected readonly BASE_INPUT = 'input';
  protected readonly VALID_FEEDBACK_DIV = '.valid-feedback';
  protected readonly INVALID_FEEDBACK_DIV = '.invalid-feedback';

  constructor(element: DebugElement) {
    super(element);
  }

  /**
   * Returns .form-control applied input element
   * @returns {HTMLInputElement | null} HTMLDivElement
   */
  public getFormControl(): HTMLInputElement | null {
    return this.getElement(this.FORM_CONTROL);
  }

  /**
   * Returns form-floating wrapper element if textbox is floating control
   * @returns {HTMLDivElement | null} HTMLDivElement
   */
  public getFloatingContainer(): HTMLDivElement | null {
    return this.getElement(this.FLOATING_LABELED_FORM_CONTROL);
  }

  /**
   * Returns base input element
   * @returns {HTMLInputElement | null} HTMLInputElement
   */
  public getInput(): HTMLInputElement | null {
    return this.getElement(this.BASE_INPUT);
  }

  /**
   * Returns valid feedback element
   * @returns {HTMLDivElement | null} HTMLDivElement
   */
  public getValidFeedback(): HTMLDivElement | null {
    return this.getElement(this.VALID_FEEDBACK_DIV);
  }

  /**
   * Returns invalid feedback element
   * @returns {HTMLDivElement | null} HTMLDivElement
   */
  public getInvalidFeedback(): HTMLDivElement | null {
    return this.getElement(this.INVALID_FEEDBACK_DIV);
  }
}
