import { Profile } from '@components/profile/profile.models';
import { SocialButton } from '@components/social-buttons/social-buttons.models';
import { Statistic } from '@components/statistics/statistics.models';

/**
 * User profile view model
 */
export interface UserProfile {
  profile: Profile;
  socialLinks: SocialButton[];
  statistics: Statistic[];
}
