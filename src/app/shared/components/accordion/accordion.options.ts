import { InjectionToken } from '@angular/core';

/**
 * Accordion options provide settings to control the display and behavior of the component
 */
export interface AccordionOptions {
  /**
   * Add .accordion-flush to remove the default background-color, some borders,
   * and some rounded corners to render accordions edge-to-edge with their parent container.
   *
   * @link https://getbootstrap.com/docs/5.0/components/accordion/#flush
   */
  flush?: boolean;

  /**
   * Allows accordion item's parent to be set to null.
   * Thus, more than one item content can be displayed at the same time.
   */
  alwaysOpen?: boolean;
}

/**
 * Default accordion component options
 */
export const DEFAULT_ACCORDION_OPTIONS: AccordionOptions = {
  flush: false,
};

export const ACCORDION_OPTIONS = new InjectionToken<AccordionOptions>(
  'Default Accordion component options',
);
