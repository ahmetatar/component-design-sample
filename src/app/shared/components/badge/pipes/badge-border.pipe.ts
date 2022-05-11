import { Pipe, PipeTransform } from '@angular/core';
import { BadgeBorders } from '../badge.models';

@Pipe({
  name: 'badgeBorder',
})
export class BadgeBorderPipe implements PipeTransform {
  transform(value: BadgeBorders): string {
    if (value != '') {
      return `border ${value}`;
    }
    return '';
  }
}
