import { InjectionToken } from '@angular/core';

export interface BadgeOptions {}

export const DEFAULT_BADGE_OPTIONS: BadgeOptions = {};

export const BADGE_OPTIONS = new InjectionToken<BadgeOptions>('Default Badge component options');
