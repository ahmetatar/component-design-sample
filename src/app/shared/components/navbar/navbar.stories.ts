import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavBrandTextDirective } from './nav/directives/nav-brand-text.directive';
import { NavBrandDirective } from './nav/directives/nav-brand.directive';
import { NavItemDirective } from './nav/directives/nav-item.directive';
import { NavLinkDirective } from './nav/directives/nav-link.directive';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar.component';
import { DEFAULT_NAVBAR_OPTIONS, NAVBAR_OPTIONS, PlacementOptions } from './navbar.options';

export default {
  title: 'Design System/Molecules/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        NavbarComponent,
        NavBrandDirective,
        NavLinkDirective,
        NavItemDirective,
        NavBrandTextDirective,
        NavComponent,
      ],
      providers: [
        {
          provide: NAVBAR_OPTIONS,
          useValue: DEFAULT_NAVBAR_OPTIONS,
        },
      ],
    }),
    componentWrapperDecorator((story) => `<div style="margin: 5rem;">${story}</div>`),
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    color: {
      options: ['navbar-light bg-light', 'navbar-dark bg-dark'],
      control: { type: 'select' },
    },
  },
} as Meta;

/**
 * Default template for stories
 * @param args template arguments
 * @returns Story
 */
const Template: Story = (args) => ({
  props: args,
  template: `
    <desx-navbar [options]="options">
      <a href="/" desxNavBrand>Component Design Sample</a>
      <desx-nav>
        <ng-template desxNavItem>
          <a desxNavLink href="/home">Home Page</a>
        </ng-template>
        <ng-template desxNavItem>
          <a desxNavLink href="/about/us">About Us</a>
        </ng-template>
      </desx-nav>
    </desx-navbar>
  `,
});

/**
 * Default story
 */
export const Default = Template.bind({});
Default.args = {
  options: {
    placement: PlacementOptions.DEFAULT,
  },
};

/**
 * Fixed bottom story
 */
export const FixedBottom = Template.bind({});
FixedBottom.args = {
  options: {
    placement: PlacementOptions.FIXED_BUTTOM,
  },
};

/**
 * Fixed top story
 */
export const FixedTop = Template.bind({});
FixedTop.args = {
  options: {
    placement: PlacementOptions.FIXED_TOP,
  },
};
