import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ALERT_OPTIONS, DEFAULT_ALERT_OPTIONS } from './alert.options';
import { AlertComponent } from './alert.component';
import { AlertComponentFixture } from './alert.component.fixture';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let alertComponentFixture: AlertComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
      providers: [
        {
          provide: ALERT_OPTIONS,
          useValue: DEFAULT_ALERT_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    alertComponentFixture = new AlertComponentFixture(fixture.debugElement);
  });

  it('creates dismissible alert', () => {
    component.dismissible = true;
    fixture.detectChanges();

    const alert = alertComponentFixture.getDismissibleAlert();

    expect(alert).toBeTruthy();
  });
});
