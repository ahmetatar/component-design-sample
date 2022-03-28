import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { AccordionItemDirective } from './directives/accordion-item.directive';
import { EventType } from './accordion.models';
import { AccordionOptions, ACCORDION_OPTIONS } from './accordion.options';

@Component({
  selector: 'desx-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit {
  @Input()
  id: string = '';

  @Input()
  options?: Partial<AccordionOptions>;

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-native
  show = new EventEmitter<Event>();

  @Output()
  shown = new EventEmitter<Event>();

  @Output()
  hide = new EventEmitter<Event>();

  @Output()
  hidden = new EventEmitter<Event>();

  @ContentChildren(AccordionItemDirective) items!: QueryList<AccordionItemDirective>;

  constructor(
    @Inject(ACCORDION_OPTIONS) private defaultOptions: AccordionOptions,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };

    this.zone.runOutsideAngular(() => {
      this.renderer.listen(this.elRef.nativeElement, EventType.Show, (e) => this.show.emit(e));
      this.renderer.listen(this.elRef.nativeElement, EventType.Shown, (e) => this.shown.emit(e));
      this.renderer.listen(this.elRef.nativeElement, EventType.Hide, (e) => this.hide.emit(e));
      this.renderer.listen(this.elRef.nativeElement, EventType.Hidden, (e) => this.hidden.emit(e));
    });
  }
}
