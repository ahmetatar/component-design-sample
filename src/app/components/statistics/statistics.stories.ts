import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsComponent } from './statistics.component';
import { STATISTICS } from './statistics.mocks';

export default {
  title: 'Design System/@Components/Organisms/Statistics',
  component: StatisticsComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
      declarations: [StatisticsComponent],
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
  statistics: STATISTICS,
};
