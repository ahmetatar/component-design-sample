## Alert Component

Alert component provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

### Options

The Alert component has an `ALERT_OPTIONS` injected into its constructor method. This includes the default options set at the global level and can be overridden by changing the **options input** at the component level.

> The component does not provide any options. It is there only to create a consistent interface with other components and for forward compatibility.

```typescript
export interface AlertOptions {}

/**
 * Default accordion component options
 */
export const DEFAULT_ALERT_OPTIONS: AlertOptions = {};
```

### Basic Usage

Use the following markup to create a basic alert component instance.

```html
<desx-alert [options]="options" [type]="type" [dismissible]="dismissible">
  A simple primary alert—check it out!
</desx-alert>
```

### Type

Alert component has `type` input for implementation of some contextual classes and can take one of the following values;

```typescript
type =
  | 'alert-primary'
  | 'alert-secondary'
  | 'alert-success'
  | 'alert-danger'
  | 'alert-warning'
  | 'alert-info'
  | 'alert-light'
  | 'alert-dark';
```

![Alert component](/src/assets/docs/alert-types.PNG)

### Dismissible

If you want the alert component to have a close button, set the dismissible option to true.

![Alert component](/src/assets/docs/dismissible-alert.PNG)

### Additional Content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers. You can achieve this by placing extra html elements in the content of the alert component.

```html
<desx-alert
  [options]="options"
  [type]="type"
  [dismissible]="dismissible"
  (onClose)="onClose($event)"
>
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example text is going to run
    a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <hr />
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
  </p>
</desx-alert>
```

![Alert component](/src/assets/docs/add-content-alert.PNG)

### Events

The alert component raises some events when an alert closing. These events are executed outside the `NgZone` when no change detection is required when alert closing.

| Event Type | Description                                                                                |
| ---------- | ------------------------------------------------------------------------------------------ |
| OnClose    | Fires immediately when the close instance method is called.                                |
| OnClosed   | Fired when the alert has been closed and CSS transitions have completed. **(In progress)** |
