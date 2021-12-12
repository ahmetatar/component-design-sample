import { InjectionToken } from '@angular/core';

export interface AlertOptions {}

/**
 * Default alert component options
 */
export const DEFAULT_ALERT_OPTIONS: AlertOptions = {};

export const ALERT_OPTIONS = new InjectionToken<AlertOptions>('Default Alert component options');
