import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { SocialButtonsComponent } from './social-buttons.component';
import { SOCIAL_BUTTONS } from './social-buttons.mocks';

export default {
  title: 'Design System/Components/Organisms/Social Buttons',
  component: SocialButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
      declarations: [SocialButtonsComponent],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 3rem">${story}</div>`),
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
  },
} as Meta;

/**
 * Default template for stories
 * @param args template arguments
 * @returns Story
 */
const Template: Story = (args) => ({
  props: args,
});

/**
 * Default story
 */
export const Default = Template.bind({});
Default.args = {
  buttons: SOCIAL_BUTTONS,
};
