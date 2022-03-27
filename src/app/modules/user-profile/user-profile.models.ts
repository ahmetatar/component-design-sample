import { SocialButton } from '@components/social-buttons/social-buttons.models';
import { Statistic } from '@components/statistics/statistics.models';

/**
 * User profile view model
 */
export interface UserProfile {
  image: string;
  userName: string;
  fullName: string;
  link: string;
  socialLinks: SocialButton[];
  statistics: Statistic[];
}
