# PropertyDatePickerField

The `PropertyDatePickerField` is a custom property control for SharePoint Framework (SPFx) web parts. It leverages the Fluent UI `DatePicker` component to provide a user-friendly date selection experience within the property pane of a web part.

## Features

- Fully integrates with the SPFx property pane.
- Supports all props available in the Fluent UI `DatePicker` component.
- Automatically updates the web part property when a date is selected.
- Handles null or undefined dates gracefully.

## Usage

Here is an example of how to use the `PropertyDatePickerField` in an SPFx web part:

### Import the Component

```typescript
import PropertyDatePickerField from "@jmdt/spcontrols/dist/propertycontrols/date";
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
              PropertyDatePickerField("example_date_field", {
                props: {
                  label: "Select a Date",
                  placeholder: "Choose a date",
                  isRequired: true,
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

The `PropertyDatePickerField` accepts the following props:

| Prop Name     | Type                        | Description                                                             |
| ------------- | --------------------------- | ----------------------------------------------------------------------- |
| `label`       | `string`                    | The label displayed above the date picker.                              |
| `placeholder` | `string`                    | Placeholder text displayed in the input field.                          |
| `isRequired`  | `boolean`                   | Whether the field is required.                                          |
| `...`         | `Partial<IDatePickerProps>` | Any additional props supported by the Fluent UI `DatePicker` component. |

For a full list of supported props, refer to the [Fluent UI DatePicker documentation](https://developer.microsoft.com/en-us/fluentui#/controls/web/datepicker).

## Fluent UI Documentation

The `PropertyDatePickerField` is built on top of the Fluent UI `DatePicker` component. For more details on its features and API, visit the official documentation:

- [Fluent UI DatePicker](https://developer.microsoft.com/en-us/fluentui#/controls/web/datepicker)

## Notes

- The `PropertyDatePickerField` automatically converts the selected date to a UTC string before storing it in the web part properties.
- Ensure that the `onPropertyChange` callback is properly bound to handle property updates.
