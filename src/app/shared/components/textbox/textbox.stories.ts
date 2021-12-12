import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { ButtonTypes } from '../button/button.models';
import { DEFAULT_COMPONENT_OPTIONS } from '../components.config';
import { TextboxComponent } from './textbox.component';

@Component({
  selector: 'desx-textbox-wrapper',
  template: `
    <form #registerForm [formGroup]="form" (ngSubmit)="onSubmit()">
      <desx-textbox
        id="passengerName"
        label="Passenger Name"
        textboxType="text"
        formControlName="passengerName"
        validFeedback="Looks good!"
        invalidFeedback="Please provide a valid passenger name"
        [parentForm]="form"
      ></desx-textbox>
      <br />
      <desx-button id="saveButton" [type]="buttonType">Save</desx-button>
    </form>
  `,
})
class TextboxWrapperComponent implements OnInit {
  form!: FormGroup;
  buttonType: ButtonTypes = 'submit';

  @ViewChild(TextboxComponent) textbox!: TextboxComponent;

  ngOnInit(): void {
    this.form = new FormGroup({
      passengerName: new FormControl('Enter passenger name', Validators.required),
    });
  }

  onSubmit = () => {};
}

export default {
  title: 'Design System/Molecules/Textbox',
  component: TextboxComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [TextboxComponent, TextboxWrapperComponent, ButtonComponent],
      providers: [...DEFAULT_COMPONENT_OPTIONS],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    writeValue: { table: { disable: true } },
    registerOnChange: { table: { disable: true } },
    registerOnTouched: { table: { disable: true } },
    onTouch: { table: { disable: true } },
    onChange: { table: { disable: true } },
    _value: { table: { disable: true } },
  },
} as Meta;

/**
 * Default template for stories
 *
 * @param args template arguments
 * @returns Story
 */
const Template: Story = (args) => ({
  props: args,
});

/**
 * This template uses TextboxWrapperComponent to wrap
 * textbox with form element
 *
 * @param args template arguments
 * @returns Story
 */
const FormTemplate: Story = (args) => ({
  props: args,
  template: `<desx-textbox-wrapper></desx-textbox-wrapper>`,
});

/**
 * Default story
 */
export const Default = Template.bind({});
Default.args = {
  id: 'passengerName',
  label: 'Passenger Name',
  placeholder: 'Enter your passenger name',
};

/**
 * Floating labels
 */
export const Floating = Template.bind({});
Floating.args = {
  ...Default.args,
  options: {
    floatingLabels: true,
  },
};

/**
 * Floating labels w/ value
 */
export const FloatingWithValue = Template.bind({});
FloatingWithValue.args = {
  ...Default.args,
  value: 'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.',
  options: {
    floatingLabels: true,
  },
};

/**
 * Textbox w/ form wrapper
 */
export const TextboxInForm = FormTemplate.bind({});
