import { SocialButton } from 'src/app/modules/social-buttons/social-buttons.models';
import { Statistic } from 'src/app/modules/statistics/statistics.models';

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
