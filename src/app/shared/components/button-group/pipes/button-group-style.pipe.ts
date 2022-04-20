import { Pipe, PipeTransform } from '@angular/core';
import { ButtonGroupStyles } from '../button-group.model';
import { ButtonGroupOptions } from '../button-group.options';

@Pipe({
  name: 'buttonGroupStyle',
})
export class ButtonGroupStylePipe implements PipeTransform {
  /**
   * It transforms given class name by toolbar option
   *
   * @param value takes one of ButtonGroupStyles type values
   * @param options takes ButtonGroupOptions
   * @returns transformed class name
   */
  transform(value: ButtonGroupStyles, options: Partial<ButtonGroupOptions> | undefined): string {
    return options?.isToolbar ? `btn-toolbar ${value}` : `btn-group ${value}`;
  }
}
