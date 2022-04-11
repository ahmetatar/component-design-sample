import { InjectionToken } from '@angular/core';
import { ButtonOptions } from '@app/shared/components/button/button.options';
import { ProfileOptions } from '@components/profile/profile.options';
import { SocialButtonOptions } from '@components/social-buttons/social-buttons.options';
import { StatisticsOptions } from '@components/statistics/statistics.options';

export interface UserProfilePresOptions {
  profileOptions?: ProfileOptions;
  socialButtonsOptions?: SocialButtonOptions;
  statisticsOptions?: StatisticsOptions;
  buttonOptions?: ButtonOptions;
}

/**
 * Default user profile component options
 */
export const DEFAULT_USER_PROFILE_PRES_OPTIONS: UserProfilePresOptions = {};

export const USER_PROFILE_PRES_OPTIONS = new InjectionToken<UserProfilePresOptions>(
  'Default user profile component options',
);
