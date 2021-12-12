import { action } from '@storybook/addon-actions';
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { EventType } from './alert.models';
import { ALERT_OPTIONS, DEFAULT_ALERT_OPTIONS } from './alert.options';

export default {
  title: 'Design System/Molecules/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      declarations: [AlertComponent],
      providers: [
        {
          provide: ALERT_OPTIONS,
          useValue: DEFAULT_ALERT_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    onClose: { table: { disable: true } },
    close: { table: { disable: true } },
  },
} as Meta;

/**
 * Component events
 */
const actions = {
  onClosed: action(EventType.Close),
};

/**
 * Default template for stories
 * @param args template arguments
 * @returns Story
 */
const Template: Story = (args) => ({
  props: {
    ...args,
  },
  template: `
    <desx-alert [options]="options" [type]="type" [dismissible]="dismissible">
      A simple primary alert—check it out!
    </desx-alert>
  `,
});

/**
 * Additional template
 * @param args template arguments
 * @returns Story
 */
const AdditionalContentTemplate: Story = (args) => ({
  props: {
    ...args,
    closed: actions.onClosed,
  },
  template: `
    <desx-alert [options]="options" [type]="type" [dismissible]="dismissible" (closed)="onClosed($event)">
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </desx-alert>
  `,
});

/**
 * Default story
 */
export const Default = Template.bind({});
Default.args = {
  type: 'alert-primary',
  dismissible: false,
};

export const AdditionalContent = AdditionalContentTemplate.bind({});
AdditionalContent.args = {
  ...Default.args,
};
