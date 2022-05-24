import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { RatingComponent } from './rating.component';
import { DEFAULT_RATING_OPTIONS, RATING_OPTIONS } from './rating.options';

@Component({
  selector: 'desx-rating-wrapper',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <desx-rating id="rating" formControlName="rating" [readonly]="readonly"></desx-rating>
      <b style="margin-left:10px">{{ form.value.rating }}</b>
    </form>
  `,
})
class RatingWrapper implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      rating: new FormControl(2, Validators.required),
    });
  }

  onSubmit = () => {};
}

export default {
  title: 'Design System/Atoms/Rating',
  component: RatingWrapper,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [RatingWrapper, RatingComponent],
      providers: [
        {
          provide: RATING_OPTIONS,
          useValue: DEFAULT_RATING_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem; padding:1rem">${story}</div>`),
  ],
} as Meta;

/**
 * Default template for stories
 * @param args template arguments
 * @returns Story
 */
const Template: Story = (args) => ({
  props: {
    ...args,
  },
  template: `<desx-rating-wrapper></desx-rating-wrapper>`,
});

/**
 * Default story
 */
export const Default = Template.bind({});
Default.args = {
  rating: 2,
  readonly: false,
};

/**
 * Readonly story
 */
export const Readonly = Template.bind({});
Readonly.args = {
  rating: 2,
  readonly: true,
};
