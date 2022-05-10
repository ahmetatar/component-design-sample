import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionHeaderDirective } from './directives/accordion-header.directive';
import { AccordionItemDirective } from './directives/accordion-item.directive';
import { AccordionComponent } from './accordion.component';
import { AccordionComponentFixture } from './accordion.component.fixture';
import {
  AccordionOptions,
  ACCORDION_OPTIONS,
  DEFAULT_ACCORDION_OPTIONS,
} from './accordion.options';

describe('AccordionComponent', () => {
  let component: AccordionWrapperComponent;
  let fixture: ComponentFixture<AccordionWrapperComponent>;
  let accordionComponentFixture: AccordionComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AccordionWrapperComponent,
        AccordionComponent,
        AccordionContentDirective,
        AccordionHeaderDirective,
        AccordionItemDirective,
      ],
      providers: [
        {
          provide: ACCORDION_OPTIONS,
          useValue: DEFAULT_ACCORDION_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionWrapperComponent);
    component = fixture.componentInstance;
    accordionComponentFixture = new AccordionComponentFixture(fixture.debugElement);
  });

  it('creates flushed accordion', () => {
    component.options = {
      flush: true,
    };

    fixture.detectChanges();
    const container = accordionComponentFixture.getAccordionFlushContainer();

    expect(container).toBeTruthy();
  });

  it('expands/collapses when click to accordion item', () => {
    fixture.detectChanges();

    const buttons = accordionComponentFixture.getAccordionButtons();

    buttons && buttons[0].click();
    buttons && buttons[1].click();

    expect(buttons && accordionComponentFixture.isCollapsed(buttons[0])).toBeTruthy();
    expect(buttons && accordionComponentFixture.isCollapsed(buttons[1])).toBeFalsy();
  });

  it('expands or collapse according to show prop', () => {
    fixture.detectChanges();

    const buttons = accordionComponentFixture.getAccordionButtons();

    expect(buttons).toBeTruthy();
    expect(buttons && accordionComponentFixture.isCollapsed(buttons[0])).toBeFalsy();
    expect(buttons && accordionComponentFixture.isCollapsed(buttons[1])).toBeTruthy();
  });

  it('creates accordion items', () => {
    fixture.detectChanges();

    const itemElements = accordionComponentFixture.getAccordionItems();

    expect(itemElements).toBeTruthy();
    expect(itemElements?.length).toBe(2);
    expect(accordionComponentFixture.getItemTextContent(itemElements && itemElements[0])).toBe(
      'Accordion Item #1',
    );
  });
});

/**
 * It is used to wrap accordion component and adds some
 * dummy items
 */
@Component({
  selector: 'desx-accordion-wrapper',
  template: `
    <desx-accordion id="mainAccordion" [options]="options">
      <desx-accordion-item id="item1" [show]="true">
        <ng-template desxAccordionHeader>Accordion Item #1</ng-template>
        <ng-template desxAccordionContent>This is a test content</ng-template>
      </desx-accordion-item>
      <desx-accordion-item id="item2" [show]="false">
        <ng-template desxAccordionHeader>Accordion Item #2</ng-template>
        <ng-template desxAccordionContent>This is a test content</ng-template>
      </desx-accordion-item>
    </desx-accordion>
  `,
})
class AccordionWrapperComponent {
  @Input()
  id!: string;

  @Input()
  options!: Partial<AccordionOptions>;
}
