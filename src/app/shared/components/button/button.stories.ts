import { action } from '@storybook/addon-actions';
import { moduleMetadata, Meta, componentWrapperDecorator, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { BUTTON_OPTIONS, DEFAULT_BUTTON_OPTIONS } from './button.options';
import { ButtonStylePipe } from './pipes/button-style.pipe';

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, ButtonStylePipe],
      providers: [
        {
          provide: BUTTON_OPTIONS,
          useValue: DEFAULT_BUTTON_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  args: {
    size: '',
    type: 'button',
    style: 'primary',
  },
  argTypes: {
    ngOnInit: { table: { disable: true } },
  },
} as Meta;

/**
 * Component events
 */
const actions = {
  onClick: action('onClick'),
};

/**
 * Default template for stories
 * @param args template arguments
 * @returns Story
 */
const Template: Story = (args) => ({
  props: {
    ...args,
    click: actions.onClick,
  },
  template: `
    <desx-button
      [id]="id"
      [type]="type"
      [btnStyle]="style"
      [options]="options"
      (click)="onClick($event)"
    ><i class="bi bi-bag-plus"></i>  Confirm your bags</desx-button>
  `,
});

/**
 * Default story
 */
export const Default = Template.bind({});
Default.args = {
  id: 'confirmBags',
  options: {
    isOutline: false,
  },
};

/**
 * Default outlined story
 */
export const OutlineDefault = Template.bind({});
OutlineDefault.args = {
  ...Default.args,
  options: {
    isOutline: true,
  },
};
