import {
  Dropdown,
  type IDropdownOption,
  type IDropdownProps,
} from "@fluentui/react/lib/Dropdown";
import MDTPropertyFieldClass, {
  IMDTPropertyFieldClassProps,
} from "../base/PropertyControl";
import { DayOfWeek } from "@fluentui/react/lib/Calendar";

/**
 * MDTDayOfWeekPropertyField
 * This component uses the Fluent UI Dropdown component to create a property field for selecting a day of the week.
 * https://developer.microsoft.com/en-us/fluentui#/controls/web/dropdown
 */

/**
 * Dropdown options for the days of the week
 */
const DAYS: IDropdownOption[] = [
  { text: "Sunday", key: DayOfWeek.Sunday },
  { text: "Monday", key: DayOfWeek.Monday },
  { text: "Tuesday", key: DayOfWeek.Tuesday },
  { text: "Wednesday", key: DayOfWeek.Wednesday },
  { text: "Thursday", key: DayOfWeek.Thursday },
  { text: "Friday", key: DayOfWeek.Friday },
  { text: "Saturday", key: DayOfWeek.Saturday },
];

class MDTDayOfWeekPropertyField extends MDTPropertyFieldClass<
  Partial<IDropdownProps>
> {
  public renderComponent(): React.ReactElement {
    return (
      <Dropdown
        options={DAYS}
        selectedKey={this.value}
        onChange={
          ((event, option) => {
            this.updatePropertyValue(option.key as number);
          }) as any
        }
        {...(this.props || {})}
      />
    );
  }
}

export default function PropertyDaysOfWeekField(
  propertyKey: string,
  properties: IMDTPropertyFieldClassProps<Partial<IDropdownProps>>
): MDTPropertyFieldClass<Partial<IDropdownProps>> {
  return new MDTDayOfWeekPropertyField(propertyKey, properties);
}
