import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { generateId } from '@app/shared/helpers/random-id.helper';
import { NavBrandTextDirective } from './directives/nav-brand-text.directive';
import { NavItemDirective } from './directives/nav-item.directive';

@Component({
  selector: 'desx-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  @Input()
  id: string = generateId('nav_');

  /**
   * It queries nav brand element which applied NavBrandTextDirective
   */
  @ContentChild(NavBrandTextDirective) brandText!: NavBrandTextDirective;

  /**
   * It queries all nav-item ng-templates which applied NavItemDirective.
   * Each template ref is placed as nav-item content in host navbar.
   */
  @ContentChildren(NavItemDirective) items!: QueryList<NavItemDirective>;
}
