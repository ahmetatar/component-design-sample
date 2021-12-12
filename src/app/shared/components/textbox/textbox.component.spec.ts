import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { TextboxComponent } from './textbox.component';
import { TextboxComponentFixture } from './textbox.component.fixture';
import { DEFAULT_TEXTBOX_OPTIONS, TEXTBOX_OPTIONS } from './textbox.options';

describe('TextboxComponent', () => {
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;
  let textboxFixture: TextboxComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextboxComponent],
      providers: [
        {
          provide: TEXTBOX_OPTIONS,
          useValue: DEFAULT_TEXTBOX_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TextboxComponent);
    component = fixture.componentInstance;
    textboxFixture = new TextboxComponentFixture(fixture.debugElement);
  });

  it('creates floating input', () => {
    component.options = {
      floatingLabels: true,
    };

    fixture.detectChanges();
    const floatingContainer = textboxFixture.getFloatingContainer();

    expect(floatingContainer).toBeTruthy();
  });

  it('creates large input', () => {
    component.size = 'form-control-lg';
    fixture.detectChanges();

    const input = textboxFixture.getInput();

    expect(input).toBeTruthy();
    expect(input?.classList).toContain('form-control-lg');
  });

  it('creates email input', () => {
    component.textboxType = 'email';
    fixture.detectChanges();

    const input = textboxFixture.getInput();

    expect(input).toBeTruthy();
    expect(input?.type).toBe('email');
  });

  it('displays valid feedback if form is valid', () => {
    const formGroup = new FormGroup({});

    spyOn<FormGroup, any>(formGroup, 'valid').and.returnValue(true);
    spyOn<FormGroup, any>(formGroup, 'invalid').and.returnValue(false);
    spyOn<FormGroup, any>(formGroup, 'touched').and.returnValue(true);

    component.parentForm = formGroup;
    component.validFeedback = 'Looks good!';
    fixture.detectChanges();

    const validFeedback = textboxFixture.getValidFeedback();
    const invalidFeedback = textboxFixture.getInvalidFeedback();

    expect(validFeedback).toBeTruthy();
    expect(validFeedback?.innerText).toBe('Looks good!');
    expect(invalidFeedback).toBeNull();
  });
});
