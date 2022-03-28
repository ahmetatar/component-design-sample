import { InjectionToken } from '@angular/core';

export interface ImageOptions {}

/**
 * Default image component options
 */
export const DEFAULT_IMAGE_OPTIONS: ImageOptions = {};

export const IMAGE_OPTIONS = new InjectionToken<ImageOptions>('Default Image component options');
