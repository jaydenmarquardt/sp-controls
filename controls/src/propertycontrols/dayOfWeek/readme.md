# PropertyDaysOfWeekField

The `PropertyDaysOfWeekField` is a custom property control for SharePoint Framework (SPFx) web parts. It uses the Fluent UI `Dropdown` component to allow users to select a day of the week within the property pane of a web part.

## Features

- Fully integrates with the SPFx property pane.
- Provides a dropdown with all days of the week as options.
- Automatically updates the web part property when a day is selected.
- Supports all props available in the Fluent UI `Dropdown` component.

## Usage

Here is an example of how to use the `PropertyDaysOfWeekField` in an SPFx web part:

### Import the Component

```typescript
import PropertyDaysOfWeekField from "@jmdt/spcontrols/dist/propertycontrols/dayOfWeek";
```

### Add to Property Pane Configuration

```typescript
protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: "Example Web Part",
        },
        groups: [
          {
            groupName: "Settings",
            groupFields: [
              PropertyDaysOfWeekField("example_dow_field", {
                props: {
                  label: "Select a Day of the Week",
                  placeholder: "Choose a day",
                },
                context: this.context,
                webpartProperties: this.properties,
                onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
              }),
            ],
          },
        ],
      },
    ],
  };
}
```

## Props

The `PropertyDaysOfWeekField` accepts the following props:

| Prop Name     | Type                      | Description                                                           |
| ------------- | ------------------------- | --------------------------------------------------------------------- |
| `label`       | `string`                  | The label displayed above the dropdown.                               |
| `placeholder` | `string`                  | Placeholder text displayed in the dropdown.                           |
| `...`         | `Partial<IDropdownProps>` | Any additional props supported by the Fluent UI `Dropdown` component. |

For a full list of supported props, refer to the [Fluent UI Dropdown documentation](https://developer.microsoft.com/en-us/fluentui#/controls/web/dropdown).

## Fluent UI Documentation

The `PropertyDaysOfWeekField` is built on top of the Fluent UI `Dropdown` component. For more details on its features and API, visit the official documentation:

- [Fluent UI Dropdown](https://developer.microsoft.com/en-us/fluentui#/controls/web/dropdown)

## Notes

- The `PropertyDaysOfWeekField` uses predefined options for the days of the week (`Sunday` through `Saturday`).
- Ensure that the `onPropertyChange` callback is properly bound to handle property updates.
