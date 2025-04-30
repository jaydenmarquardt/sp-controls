import MDTPropertyFieldClass, {
  IMDTPropertyFieldClassProps,
} from "../base/PropertyControl";
import {
  DatePicker,
  type IDatePickerProps,
} from "@fluentui/react/lib/DatePicker";

/**
 * Fluent UI DatePicker Property Control
 * https://developer.microsoft.com/en-us/fluentui#/controls/web/datepicker
 *
 */

class MDTDatePropertyField extends MDTPropertyFieldClass<
  Partial<IDatePickerProps>
> {
  public renderComponent(): React.ReactElement {
    return (
      <DatePicker
        value={this.value}
        onSelectDate={(date: Date | null | undefined) => {
          this.updatePropertyValue(date.toUTCString());
        }}
        {...(this.props || {})}
      />
    );
  }
}

export default function PropertyDatePickerField(
  propertyKey: string,
  properties: IMDTPropertyFieldClassProps<Partial<IDatePickerProps>>
): MDTPropertyFieldClass<Partial<IDatePickerProps>> {
  return new MDTDatePropertyField(propertyKey, properties);
}
