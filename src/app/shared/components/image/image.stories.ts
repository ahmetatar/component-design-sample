import { moduleMetadata, Meta, componentWrapperDecorator, Story } from '@storybook/angular';
import { ImageComponent } from './image.component';
import { DEFAULT_IMAGE_OPTIONS, IMAGE_OPTIONS } from './image.options';

export default {
  title: 'Design System/Atoms/Image',
  component: ImageComponent,
  decorators: [
    moduleMetadata({
      declarations: [ImageComponent],
      providers: [
        {
          provide: IMAGE_OPTIONS,
          useValue: DEFAULT_IMAGE_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
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
  id: 'profileImage',
  source: 'assets/profile/default-avatar-1.png',
  width: '75',
  height: '75',
};
