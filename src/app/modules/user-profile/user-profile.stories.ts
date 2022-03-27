import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { SOCIAL_BUTTONS } from '@components/social-buttons/social-buttons.mocks';
import { STATISTICS } from '@components/statistics/statistics.mocks';
import { SharedModule } from '@shared/shared.module';
import { UserProfileComponent } from './user-profile.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { StatisticsComponent } from '@components/statistics/statistics.component';
import { SocialButtonsComponent } from '@components/social-buttons/social-buttons.component';

export default {
  title: 'Design System/Templates/User Profile',
  component: UserProfileComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
      declarations: [
        UserProfileComponent,
        StatisticsComponent,
        ProfileComponent,
        SocialButtonsComponent,
      ],
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
    image: 'assets/profile/default-avatar-1.png',
    fullName: 'Julie L. Arsenault',
    userName: '@juliar',
    link: 'https://medium.com',
    socialLinks: SOCIAL_BUTTONS,
    statistics: STATISTICS,
  },
  options: {
    profileOptions: {
      showLink: true,
    },
    buttonOptions: {
      isOutline: false,
    }
  },
};
