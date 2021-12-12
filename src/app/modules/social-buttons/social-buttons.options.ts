import { InjectionToken } from '@angular/core';

export interface SocialButtonOptions {}

/**
 * Default social buttons component options
 */
export const DEFAULT_SOCIAL_BUTTON_OPTIONS: SocialButtonOptions = {};

export const SOCIAL_BUTTON_OPTIONS = new InjectionToken<SocialButtonOptions>(
  'Default social buttons component options'
);
