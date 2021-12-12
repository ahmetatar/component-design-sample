import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonSizes, ButtonStyles, ButtonTypes } from './button.models';
import { ButtonOptions, BUTTON_OPTIONS } from './button.options';

@Component({
  selector: 'desx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input()
  options?: Partial<ButtonOptions>;

  @Input()
  size: ButtonSizes = '';

  @Input()
  btnStyle: ButtonStyles = 'primary';

  @Input()
  type: ButtonTypes = 'button';

  @Output()
  click = new EventEmitter<Event>();

  constructor(
    @Inject(BUTTON_OPTIONS) private defaultOptions: ButtonOptions,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };

    this.renderer.listen(this.elRef.nativeElement, 'click', (e) => this.click.emit(e));
  }
}
