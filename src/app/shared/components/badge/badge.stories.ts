import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { BADGE_OPTIONS, DEFAULT_BADGE_OPTIONS } from './badge.options';
import {
  BadgeBordersValues,
  BadgeColorsValues,
  BadgeModesValues,
  BadgeShapesValues,
  BadgeTextColorsValues,
} from './badge.models';
import { BadgeBorderPipe } from './pipes/badge-border.pipe';
import { BadgeModePipe } from './pipes/badge-mode.pipe';

export default {
  title: 'Design System/Atoms/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      declarations: [BadgeComponent, BadgeBorderPipe, BadgeModePipe],
      providers: [
        {
          provide: BADGE_OPTIONS,
          useValue: DEFAULT_BADGE_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div style="border: 1px solid #333; padding: 10px; background-color: #BBB; position: relative;">Here is the badge: ${story}</div>`,
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: BadgeColorsValues,
    },
    shape: {
      control: 'select',
      options: BadgeShapesValues,
    },
    textColor: {
      control: 'select',
      options: BadgeTextColorsValues,
    },
    border: {
      control: 'select',
      options: BadgeBordersValues,
    },
    mode: {
      control: 'select',
      options: BadgeModesValues,
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  text: 'Simple Text',
  color: BadgeColorsValues[0],
  shape: BadgeShapesValues[0],
  textColor: BadgeTextColorsValues[0],
  border: BadgeBordersValues[0],
  mode: BadgeModesValues[0],
};

export const CounterMode: Story = (args) => ({
  props: args,
  template: `
    <div style="position:relative; margin-top: 30px; width: 120px; padding: 15px; background-color: #ecf0f1; border: 2px solid #34495e;">
      Some Text
      <desx-badge [text]="'90+'" [color]="'bg-warning'" [textColor]="'text-dark'" [border]="'border-dark'" [mode]="'counter'"></desx-badge>
    </div>
  `,
});
CounterMode.args = {
  text: '90+',
  color: BadgeColorsValues[3],
  textColor: BadgeTextColorsValues[1],
  border: BadgeBordersValues[1],
  mode: BadgeModesValues[1],
};

export const DotMode: Story = (args) => ({
  props: args,
  template: `
    <div style="position:relative; margin-top: 30px; width: 120px; padding: 15px; background-color: #ecf0f1; border: 2px solid #34495e;">
      Some Text
      <desx-badge [color]="'bg-danger'" [border]="'border-light'" [mode]="'dot'"></desx-badge>
    </div>
  `,
});
DotMode.args = {
  color: BadgeColorsValues[3],
  textColor: BadgeTextColorsValues[0],
  border: BadgeBordersValues[2],
  mode: BadgeModesValues[2],
};
