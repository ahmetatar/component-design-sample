import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { BADGE_OPTIONS, DEFAULT_BADGE_OPTIONS } from './badge.options';
import {
  BadgeBordersValues,
  BadgeColorsValues,
  BadgeShapesValues,
  BadgeTextColorsValues,
} from './badge.models';

export default {
  title: 'Design System/Atoms/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      declarations: [BadgeComponent],
      providers: [
        {
          provide: BADGE_OPTIONS,
          useValue: DEFAULT_BADGE_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div style="border: 1px solid #333; padding: 10px; background-color: #BBB;">Here is the badge: ${story}</div>`,
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
};
