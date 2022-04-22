import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile.component';

export default {
  title: 'Design System/Components/Organisms/Profile',
  component: ProfileComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
      declarations: [ProfileComponent],
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
  profile: {
    profileImage: '/assets/profile/default-avatar-1.png',
    fullName: 'Julie L. Arsenault',
    link: 'microsoft.com',
    userName: '@juliar',
  },
  options: {
    showLink: true,
  },
};
