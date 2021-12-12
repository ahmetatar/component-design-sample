import { InjectionToken } from '@angular/core';

/**
 * Button options provide settings to control the display and behavior of the component
 */
export interface ButtonOptions {
  /**
   * Replaces the default modifier classes with the .btn-outline-* ones to remove all
   * background images and colors on any button.
   *
   * @link https://getbootstrap.com/docs/5.0/components/buttons/#outline-buttons
   */
  isOutline: boolean;
}

/**
 * Default button component options
 */
export const DEFAULT_BUTTON_OPTIONS: ButtonOptions = {
  isOutline: true,
};

export const BUTTON_OPTIONS = new InjectionToken<ButtonOptions>('Default Button component options');
