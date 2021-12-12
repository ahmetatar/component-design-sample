## Button Component

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

### Options

The Button component has an `BUTTON_OPTIONS` injected into its constructor method. This includes the default options set at the global level and can be overridden by changing the **options input** at the component level.

```typescript
export interface ButtonOptions {
  isOutline: boolean;
}

/**
 * Default button component options
 */
export const DEFAULT_BUTTON_OPTIONS: ButtonOptions = {
  isOutline: true,
};
```

### Basic Usage

Use the following markup to create a basic button component instance.

```html
<desx-button [options]="options" buttonType="submit" buttonStyle="primary"></desx-button>
```

### Button Style

The `buttonStyle` property of the button component determines the style of button you want to create and can take any of the following values;

```typescript
buttonStyle =
  ButtonStyle.Primary |
  ButtonStyle.Secondary |
  ButtonStyle.Success |
  ButtonStyle.Danger |
  ButtonStyle.Warning |
  ButtonStyle.Info |
  ButtonStyle.Light |
  ButtonStyle.Dark |
  ButtonStyle.Link;
```

![Button component](/src/assets/docs/buttons.PNG)

### Button Type

The `buttonType` property of the button component is used to determine the type of the button and can take one of the following values;

```typescript
buttonType = 
  ButtonType.Button,
  ButtonType.Submit,
  ButtonType.Reset,
```

### Button Size
A button can be created in different sizes using the ``size`` parameter;

```typescript
size = 
  ButtonSize.Default,
  ButtonSize.Large,
  ButtonSize.Small,
```

![Button component](/src/assets/docs/button-sizes.PNG)
![Button component](/src/assets/docs/button-sizes-2.PNG)

### Events

The button component emits a click event when clicked.

| Event Type | Description                                                                                |
| ---------- | ------------------------------------------------------------------------------------------ |
| OnClick    | Triggered when button is clicked.                                |
