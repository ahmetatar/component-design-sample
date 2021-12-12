/**
 * Includes predefined bootstrap icon classes for social buttons
 * @link https://icons.getbootstrap.com/
 */
export enum SocialButtonTypes {
  Facebook = 'bi-facebook',
  Twitter = 'bi-twitter',
  Linkedin = 'bi-linkedin',
  Skype = 'bi-skype',
  Instagram = 'bi-instagram',
}

/**
 * Social button model
 */
export interface SocialButton {
  type: SocialButtonTypes;
  link: string;
}
