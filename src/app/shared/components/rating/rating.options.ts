import { InjectionToken } from '@angular/core';

export interface RatingOptions {}

export const DEFAULT_RATING_OPTIONS: RatingOptions = {};

export const RATING_OPTIONS = new InjectionToken<RatingOptions>('Default Rating component options');
