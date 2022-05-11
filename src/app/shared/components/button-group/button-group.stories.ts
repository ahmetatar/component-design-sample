import { action } from '@storybook/addon-actions';
import { moduleMetadata, Meta, componentWrapperDecorator, Story } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { BUTTON_OPTIONS, DEFAULT_BUTTON_OPTIONS } from '../button/button.options';
import { ButtonStylePipe } from '../button/pipes/button-style.pipe';
import { ButtonGroupComponent } from './button-group.component';
import { BUTTON_GROUP_OPTIONS, DEFAULT_BUTTON_GROUP_OPTIONS } from './button-group.options';
import { ButtonGroupStylePipe } from './pipes/button-group-style.pipe';

export default {
  title: 'Design System/Atoms/Button Group',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, ButtonStylePipe, ButtonGroupComponent, ButtonGroupStylePipe],
      providers: [
        {
          provide: BUTTON_OPTIONS,
          useValue: DEFAULT_BUTTON_OPTIONS,
        },
        {
          provide: BUTTON_GROUP_OPTIONS,
          useValue: DEFAULT_BUTTON_GROUP_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  args: { size: '', style: '' },
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
    <desx-button-group [id]="id" [btnGroupStyle]="style" [options]="options" (click)="onClick($event)">
      <desx-button>Left</desx-button>
      <desx-button>Middle</desx-button>
      <desx-button>Right</desx-button>
      <button>Button</button>
    </desx-button-group>
  `,
});

/**
 * Default story
 */
export const Default = Template.bind({});
Default.args = {
  id: 'buttonGroup',
};

/**
 * Default toolbar story
 */
export const ToolbarDefault = Template.bind({});
ToolbarDefault.args = {
  ...Default.args,
  options: {
    isToolbar: true,
  },
};

/**
 * Vertical toolbar story
 */
export const ToolbarVertical = Template.bind({});
ToolbarVertical.args = {
  ...ToolbarDefault.args,
  options: {
    isToolbar: true,
  },
  style: 'btn-group-vertical',
};
