import { InjectionToken } from '@angular/core';
import { ButtonOptions } from '@app/shared/components/button/button.options';
import { ProfileOptions } from '@components/profile/profile.options';
import { SocialButtonOptions } from '@components/social-buttons/social-buttons.options';
import { StatisticsOptions } from '@components/statistics/statistics.options';

export interface UserProfileOptions {
  profileOptions?: ProfileOptions;
  socialButtonsOptions?: SocialButtonOptions;
  statisticsOptions?: StatisticsOptions;
  buttonOptions?: ButtonOptions;
}

/**
 * Default user profile component options
 */
export const DEFAULT_USER_PROFILE_OPTIONS: UserProfileOptions = {};

export const USER_PROFILE_OPTIONS = new InjectionToken<UserProfileOptions>(
  'Default user profile component options',
);
