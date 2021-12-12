## Accordion Component

Accordion is a collection of collapsible panels (bootstrap cards).
It can ensure only one panel is opened at a time and allows to customize panel headers.

### Options

The Accordion component has an `ACCORDION_OPTIONS` injected into its constructor method. This includes the default options set at the global level and can be overridden by changing the **options input** at the component level.

```typescript
export interface AccordionOptions {
  flush?: boolean;
  alwaysOpen?: boolean;
}

/**
 * Default accordion component options
 */
export const DEFAULT_ACCORDION_OPTIONS: AccordionOptions = {
  flush: false,
};
```

### Basic Usage

The Accordion component acts as a container for multiple `accordion-item` components. Accordion item is an angular directive and a container for templates `(ng-template)` that create the title and body of a collapsable part. You can create a basic accordion view with the following markup. Note that the `desx-accordion-header` and `desx-accordion-content` directives are applied to the ng-templates that make up the Header and Body.

![Accordion component](/src/assets/docs/basic-accordion.PNG)

```html
<desx-accordion id="mainAccordion">
  <desx-accordion-item id="item1">
    <ng-template desx-accordion-header> Accordion Item #1 </ng-template>
    <ng-template desx-accordion-content>
      Lorem Ipsum is simply dummy text of the printing and industry.
    </ng-template>
  </desx-accordion-item>
  <desx-accordion-item id="item2">
    <ng-template desx-accordion-header> Accordion Item #2 </ng-template>
    <ng-template desx-accordion-content>
      It is a long established fact that a reader will be distracted by the readable content of a
      page when looking at its layout.
    </ng-template>
  </desx-accordion-item>
</desx-accordion>
```

### Always Open

By default, clicking any accordion item collapses previously open panels. If you want to change this behavior and have each clicked item expand, set the `alwaysOpen` parameter on `AccordionOptions` to true. You can do this by changing the default component options or overriding them with options input as shown in the options section.

![Accordion component](/src/assets/docs/always-open-accordion.PNG)

```typescript
export const DEFAULT_ACCORDION_OPTIONS: AccordionOptions = {
  alwaysOpen: true,
};
```

or

```typescript
<desx-accordion id="mainAccordion" [options]="...">...</desx-accordion>
```

> This option comes with a bug that we are still working on right now. When all panels are expanded, they cannot be collapsed again and are followed by [#231](https://github.com) issue.

### Flush

Set the `flush` option to true to give up the accordion item's borders.

![Accordion component](/src/assets/docs/flushed-accordion.PNG)

```typescript
export const DEFAULT_ACCORDION_OPTIONS: AccordionOptions = {
  flush: true,
};
```

or

```typescript
<desx-accordion id="mainAccordion" [options]="...">...</desx-accordion>
```

### Events

The Accordion component raises some events when an accordion item collapse/expand. These events are executed outside the `NgZone` when no change detection is required when each item expands/collapses.

| Event Type   | Description                                                           |
| ------------ | ----------------------------------------------------------------------|
| OnShow       | This event fires immediately when the show instance method is called. |
| OnShown      | This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete). |
| OnHide       | This event is fired immediately when the hide method has been called. |
| OnHidden     | This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete). |
