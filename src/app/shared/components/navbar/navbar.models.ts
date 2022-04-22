/**
 * Choose from .navbar-light for use with light background colors,
 * or .navbar-dark for dark background colors. Then, customize with .bg-* utilities.
 *
 * @link https://getbootstrap.com/docs/5.0/components/navbar/#color-schemes
 */
export type NavbarColor = NavbarColors.DARK | NavbarColors.LIGHT;

export enum NavbarColors {
  DARK = 'navbar-dark bg-dark',
  LIGHT = 'navbar-light bg-light',
}
