import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AccordionComponent } from './accordion.component';
import { ACCORDION_OPTIONS, DEFAULT_ACCORDION_OPTIONS } from './accordion.options';
import { AccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionHeaderDirective } from './directives/accordion-header.directive';
import { AccordionItemDirective } from './directives/accordion-item.directive';
import { EventType } from './accordion.models';

export default {
  title: 'Design System/Molecules/Accordion',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      declarations: [AccordionContentDirective, AccordionHeaderDirective, AccordionItemDirective],
      providers: [
        {
          provide: ACCORDION_OPTIONS,
          useValue: DEFAULT_ACCORDION_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem">${story}</div>`),
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    show: { table: { disable: true } },
    shown: { table: { disable: true } },
    hide: { table: { disable: true } },
    hidden: { table: { disable: true } },
    items: { table: { disable: true } },
    id: { table: { disable: true } },
  },
} as Meta;

/**
 * Component events
 */
const actions = {
  onShow: action(EventType.Show),
  onShown: action(EventType.Shown),
  onHide: action(EventType.Hide),
  onHidden: action(EventType.Hidden),
};

/**
 * Default template for stories
 * @param args template arguments
 * @returns Story
 */
const Template: Story = (args) => ({
  props: {
    ...args,
    onShow: actions.onShow,
    onShown: actions.onShown,
    onHide: actions.onHide,
    onHidden: actions.onHidden,
  },
  template: `
    <desx-accordion id="mainAccordion" [options]="options"
      (show)="onShow($event)" (shown)="onShown($event)" (hide)="onHide($event)" (hidden)="onHidden($event)">
      <desx-accordion-item id="item1">
        <ng-template desx-accordion-header>
          Accordion Item #1
        </ng-template>
        <ng-template desx-accordion-content>
          This is a test content
        </ng-template>
      </desx-accordion-item>
      <desx-accordion-item id="item2">
        <ng-template desx-accordion-header>
          Accordion Item #2
        </ng-template>
        <ng-template desx-accordion-content>
          This is a test content
        </ng-template>
      </desx-accordion-item>
    </desx-accordion>
  `,
});

/**
 * Default Accordion
 */
export const Default = Template.bind({});

/**
 * Flush Accordion
 */
export const Flushed = Template.bind({});
Flushed.args = {
  options: {
    flush: true,
  },
};

Flushed.parameters = {
  backgrounds: {
    values: [
      { name: 'default', value: '#fff' },
      { name: 'gray', value: '#ccc' },
    ],
  },
};

/**
 * Multi collapsible accordion
 */
export const AlwaysOpen = Template.bind({});
AlwaysOpen.args = {
  options: {
    alwaysOpen: true,
  },
};
