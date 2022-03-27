import { InjectionToken } from '@angular/core';

export interface StatisticsOptions {}

/**
 * Default statistics component options
 */
export const DEFAULT_STATISTICS_OPTIONS: StatisticsOptions = {};

export const STATISTICS_OPTIONS = new InjectionToken<StatisticsOptions>(
  'Default statistics component options'
);
