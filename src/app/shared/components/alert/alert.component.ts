import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnInit,
  Output,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { AlertTypes, EventType } from './alert.models';
import { AlertOptions, ALERT_OPTIONS } from './alert.options';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'desx-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit {
  @Input()
  options?: Partial<AlertOptions>;

  @Input()
  type: AlertTypes = 'alert-primary';

  @Input()
  dismissible: boolean = false;

  @Output()
  closed = new EventEmitter<Event>();

  constructor(
    @Inject(ALERT_OPTIONS) private defaultOptions: AlertOptions,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };

    this.zone.runOutsideAngular(() => {
      this.renderer.listen(this.elRef.nativeElement, EventType.Close, (e) => this.closed.emit(e));
    });
  }

  close(): void {
    this.zone.runOutsideAngular(() => {
      const alert = bootstrap.Alert.getInstance(this.elRef.nativeElement);
      alert?.close();
    });
  }
}
