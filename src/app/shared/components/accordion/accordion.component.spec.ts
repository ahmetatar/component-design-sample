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

  it('creates accordion items', () => {
    fixture.detectChanges();

    const itemElements = accordionComponentFixture.getAccordionItems();

    expect(itemElements).toBeTruthy();
    expect(itemElements?.length).toBe(2);
    expect(itemElements && itemElements[0].querySelector('h2 button')?.textContent).toBe('Accordion Item #1');
  });
});

@Component({
  selector: 'desx-accordion-wrapper',
  template: `
    <desx-accordion id="mainAccordion" [options]="options">
      <desx-accordion-item id="item1">
        <ng-template desx-accordion-header>Accordion Item #1</ng-template>
        <ng-template desx-accordion-content>This is a test content</ng-template>
      </desx-accordion-item>
      <desx-accordion-item id="item2">
        <ng-template desx-accordion-header>Accordion Item #2</ng-template>
        <ng-template desx-accordion-content>This is a test content</ng-template>
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
