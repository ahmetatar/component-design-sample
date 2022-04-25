import { InjectionToken } from '@angular/core';

/**
 * Button group options provide settings to control the display and behavior of the component
 */
export interface ButtonGroupOptions {
  /**
   * Combine sets of button groups into button toolbars for more complex components.
   * Use utility classes as needed to space out groups, buttons, and more.
   *
   * @link https://getbootstrap.com/docs/5.0/components/button-group/#button-toolbar
   */
  isToolbar: boolean;
}

/**
 * Default button group component options
 */
export const DEFAULT_BUTTON_GROUP_OPTIONS: ButtonGroupOptions = {
  isToolbar: false,
};

export const BUTTON_GROUP_OPTIONS = new InjectionToken<ButtonGroupOptions>(
  'Default Button Group component options',
);
