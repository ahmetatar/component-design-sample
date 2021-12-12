import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { ButtonComponentFixture } from './button.component.fixture';
import { BUTTON_OPTIONS, DEFAULT_BUTTON_OPTIONS } from './button.options';
import { ButtonStylePipe } from './pipes/button-style.pipe';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonComponentFixture: ButtonComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, ButtonStylePipe],
      providers: [
        {
          provide: BUTTON_OPTIONS,
          useValue: DEFAULT_BUTTON_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    buttonComponentFixture = new ButtonComponentFixture(fixture.debugElement);
  });

  it('creates outlined button', () => {
    component.options = {
      isOutline: true,
    };

    fixture.detectChanges();
    const button = buttonComponentFixture.getOutlinedPrimaryButton();

    expect(button).toBeTruthy();
  });

  it('creates large button', () => {
    component.size = 'btn-lg';
    fixture.detectChanges();

    const button = buttonComponentFixture.getLargeButton();

    expect(button).toBeTruthy();
  });

  it('creates warning button', () => {
    component.btnStyle = 'warning';
    component.options = {
      isOutline: false,
    };

    fixture.detectChanges();
    const button = buttonComponentFixture.getWarningButton();

    expect(button).toBeTruthy();
  });
});
