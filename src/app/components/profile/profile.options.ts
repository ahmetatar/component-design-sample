import { InjectionToken } from '@angular/core';

export interface ProfileOptions {
  /**
   * Determines whether the web site link will appear in
   * the user profile.
   */
  showLink: boolean;
}

/**
 * Default profile component options
 */
export const DEFAULT_PROFILE_OPTIONS: ProfileOptions = {
  showLink: true,
};

export const PROFILE_OPTIONS = new InjectionToken<ProfileOptions>(
  'Default profile component options',
);
