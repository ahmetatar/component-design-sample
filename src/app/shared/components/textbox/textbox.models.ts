/**
 * HTML textbox types. Type contains only certain types and is extensible
 */
export type TextboxType = 'email' | 'file' | 'text' | 'password';

/**
 * Add the relative form sizing classes to the .input-group itself and contents within will
 * automatically resize—no need for repeating the form control size classes on each element.
 * @link https://getbootstrap.com/docs/5.0/forms/input-group/#sizing
 */
export type TextboxSize = '' | 'form-control-lg' | 'form-control-sm';
