import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonGroupComponentFixture } from './button-group.component.fixture';
import { ButtonGroupSizes, ButtonGroupStyles } from './button-group.model';
import { BUTTON_GROUP_OPTIONS, DEFAULT_BUTTON_GROUP_OPTIONS } from './button-group.options';
import { ButtonGroupStylePipe } from './pipes/button-group-style.pipe';

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupComponent;
  let fixture: ComponentFixture<ButtonGroupComponent>;
  let buttonGroupComponentFixture: ButtonGroupComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonGroupComponent, ButtonGroupStylePipe],
      providers: [
        {
          provide: BUTTON_GROUP_OPTIONS,
          useValue: DEFAULT_BUTTON_GROUP_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    buttonGroupComponentFixture = new ButtonGroupComponentFixture(fixture.debugElement);
  });

  it('creates toolbar button group', () => {
    component.options = { isToolbar: true };
    fixture.detectChanges();

    const buttonGroup = buttonGroupComponentFixture.getToolbarButtonGroup();

    expect(buttonGroup).toBeTruthy();
  });

  it('creates button group only with desx-button', () => {
    fixture.detectChanges();

    const buttonGroup = buttonGroupComponentFixture.getButtonGroup;

    expect(buttonGroup).toBeTruthy();
  });

  it('creates large button group', () => {
    component.size = ButtonGroupSizes.Large;
    fixture.detectChanges();

    const buttonGroup = buttonGroupComponentFixture.getLargeButtonGroup();

    expect(buttonGroup).toBeTruthy();
  });

  it('creates vertical button group', () => {
    component.btnGroupStyle = ButtonGroupStyles.Vertical;
    fixture.detectChanges();

    const buttonGroup = buttonGroupComponentFixture.getVerticalButtonGroup();

    expect(buttonGroup).toBeTruthy();
  });
});
