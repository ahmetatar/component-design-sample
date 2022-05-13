import { Pipe, PipeTransform } from '@angular/core';
import { BadgeModes } from '../badge.models';

@Pipe({
  name: 'badgeMode',
})
export class BadgeModePipe implements PipeTransform {
  transform(value: BadgeModes): string {
    switch (value) {
      case '':
        return '';
      case 'counter':
        return 'position-absolute top-0 start-100 translate-middle';
      case 'dot':
        return 'position-absolute top-0 start-100 translate-middle rounded-circle p-2';
    }
  }
}
