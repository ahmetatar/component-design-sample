import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonGroupComponentFixture } from './button-group.component.fixture';
import { ButtonGroupSizes, ButtonGroupStyles } from './button-group.model';
import {
  ButtonGroupOptions,
  BUTTON_GROUP_OPTIONS,
  DEFAULT_BUTTON_GROUP_OPTIONS,
} from './button-group.options';
import { ButtonGroupStylePipe } from './pipes/button-group-style.pipe';
import { ButtonComponent } from '../button/button.component';
import { ButtonStylePipe } from '../button/pipes/button-style.pipe';
import { BUTTON_OPTIONS, DEFAULT_BUTTON_OPTIONS } from '../button/button.options';

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupWrapperComponent;
  let fixture: ComponentFixture<ButtonGroupWrapperComponent>;
  let buttonGroupComponentFixture: ButtonGroupComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ButtonGroupWrapperComponent,
        ButtonGroupComponent,
        ButtonGroupStylePipe,
        ButtonComponent,
        ButtonStylePipe,
      ],
      providers: [
        {
          provide: BUTTON_GROUP_OPTIONS,
          useValue: DEFAULT_BUTTON_GROUP_OPTIONS,
        },
        {
          provide: BUTTON_OPTIONS,
          useValue: DEFAULT_BUTTON_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupWrapperComponent);
    component = fixture.componentInstance;
    buttonGroupComponentFixture = new ButtonGroupComponentFixture(fixture.debugElement);
  });

  it('creates toolbar button group', () => {
    component.options = { isToolbar: true };
    fixture.detectChanges();

    const buttonGroup = buttonGroupComponentFixture.getToolbarButtonGroup();

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

  it('creates button group only with desx-button', () => {
    fixture.detectChanges();

    const buttonGroup = buttonGroupComponentFixture.getButtonGroup();

    expect(buttonGroup).toBeTruthy();
    expect(buttonGroup).withContext('Left');
    expect(buttonGroup).not.withContext('Center');
  });
});

@Component({
  selector: 'desx-button-group-wrapper',
  template: `
    <desx-button-group
      [id]="id"
      [btnGroupStyle]="btnGroupStyle"
      [options]="options"
      [size]="size"
      (click)="onClick($event)"
    >
      <desx-button>Left</desx-button>
      <desx-button>Middle</desx-button>
      <desx-button>Right</desx-button>
      <button>Center</button>
    </desx-button-group>
  `,
})
class ButtonGroupWrapperComponent {
  @Input()
  options!: Partial<ButtonGroupOptions>;

  @Input()
  size: ButtonGroupSizes = ButtonGroupSizes.Large;

  @Input()
  btnGroupStyle: ButtonGroupStyles = ButtonGroupStyles.Vertical;
}
