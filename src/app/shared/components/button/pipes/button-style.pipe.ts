import { Pipe, PipeTransform } from '@angular/core';
import { ButtonStyles } from '../button.models';
import { ButtonOptions } from '../button.options';

@Pipe({
  name: 'buttonStyle',
})
export class ButtonStylePipe implements PipeTransform {
  /**
   * It transforms given class name by outline option
   *
   * @param value takes one of ButtonStyles type values
   * @param options takes ButtonOptions
   * @returns transformed class name
   */
  transform(value: ButtonStyles, options: Partial<ButtonOptions> | undefined): string {
    return options?.isOutline ? `btn-outline-${value}` : `btn-${value}`;
  }
}
