import { InjectionToken } from '@angular/core';

/**
 * Contains options that determine the placement of the navbar
 */
export type Placement =
  | PlacementOptions.DEFAULT
  | PlacementOptions.FIXED_TOP
  | PlacementOptions.FIXED_BUTTOM
  | PlacementOptions.STICK_TOP;

export enum PlacementOptions {
  DEFAULT = '',
  FIXED_TOP = 'fixed-top',
  FIXED_BUTTOM = 'fixed-bottom',
  STICK_TOP = 'sticky-top',
}

export interface NavbarOptions {
  /**
   * Choose from fixed to the top, fixed to the bottom,
   * or stickied to the top (scrolls with the page until it reaches the top, then stays there).
   *
   * @link https://getbootstrap.com/docs/5.0/components/navbar/#placement
   */
  placement?: Placement;
}

/**
 * Default navbar component options
 */
export const DEFAULT_NAVBAR_OPTIONS: NavbarOptions = {
  placement: PlacementOptions.DEFAULT,
};

export const NAVBAR_OPTIONS = new InjectionToken<NavbarOptions>('Default Navbar component options');
