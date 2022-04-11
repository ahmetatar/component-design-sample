import { InjectionToken } from '@angular/core';

export interface UserProfileContOptions {}

/**
 * Default user profile container component options
 */
export const DEFAULT_USER_PROFILE_CONT_OPTIONS: UserProfileContOptions = {};

export const USER_PROFILE_CONT_OPTIONS = new InjectionToken<UserProfileContOptions>(
  'Default user profile container component options',
);
