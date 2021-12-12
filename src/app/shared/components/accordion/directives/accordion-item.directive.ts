import { AfterContentInit, ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { AccordionContentDirective } from './accordion-content.directive';
import { AccordionHeaderDirective } from './accordion-header.directive';

@Directive({
  selector: 'desx-accordion-item',
})
export class AccordionItemDirective implements AfterContentInit {
  headerTmpl!: AccordionHeaderDirective;
  contentTmpl!: AccordionContentDirective;

  @Input()
  id!: string;

  @Input()
  show: boolean = false;

  @ContentChildren(AccordionHeaderDirective, { descendants: true })
  headerTmpls!: QueryList<AccordionHeaderDirective>;

  @ContentChildren(AccordionContentDirective, { descendants: true })
  contentTmpls!: QueryList<AccordionContentDirective>;

  ngAfterContentInit(): void {
    this.headerTmpl = this.headerTmpls.first;
    this.contentTmpl = this.contentTmpls.first;
  }
}
