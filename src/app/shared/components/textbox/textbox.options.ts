import { InjectionToken } from '@angular/core';

/**
 * Textbox options provide settings to control the display and behavior of the component
 */
export interface TextboxOptions {
  /**
   * Wraps a pair of <input class="form-control"> and <label> elements in .form-floating
   * to enable floating labels with Bootstrap’s textual form fields.
   *
   * @link https://getbootstrap.com/docs/5.0/forms/floating-labels/
   */
  floatingLabels: boolean;
}

/**
 * Default button component options
 */
export const DEFAULT_TEXTBOX_OPTIONS: TextboxOptions = {
  floatingLabels: false,
};

export const TEXTBOX_OPTIONS = new InjectionToken<TextboxOptions>(
  'Default Textbox component options',
);
