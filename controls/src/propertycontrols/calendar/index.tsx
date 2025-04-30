import { Calendar, type ICalendarProps } from "@fluentui/react/lib/Calendar";
import { type IMDTPropertyFieldClassProps } from "../base/PropertyControl";
import MDTCalloutPropertyField, {
  type IMDTCalloutPropertyFieldProps,
} from "../base/PropertyCalloutButtonControl";
import { useEffect, useState } from "react";

export interface IMDTCalendarPropertyFieldProps
  extends IMDTCalloutPropertyFieldProps {
  calendarProps: ICalendarProps;
}

class MDTCalendarPropertyField extends MDTCalloutPropertyField<IMDTCalendarPropertyFieldProps> {
  public renderCalloutContent(): React.ReactElement {
    return <Component control={this} value={this.value} />;
  }
}

const Component: React.FunctionComponent<{
  control: MDTCalendarPropertyField;
  value: string | Date;
}> = ({ value: propValue, control }) => {
  const [value, setValue] = useState(
    propValue ? new Date(propValue) : undefined
  );

  useEffect(() => {
    if (!propValue) return;
    const date = new Date(propValue);

    control.setButtonLabel?.(date?.toUTCString());
  }, [propValue]);

  return (
    <Calendar
      value={value}
      onSelectDate={(date: Date) => {
        control.updatePropertyValue(date.toUTCString());
        control.closeCallout();
        setValue(date);
        control.setButtonLabel?.(date.toUTCString());
      }}
      {...(control.props?.calendarProps || {})}
    />
  );
};

export default function PropertyCalendarField(
  propertyKey: string,
  properties: IMDTPropertyFieldClassProps<IMDTCalendarPropertyFieldProps>
): MDTCalendarPropertyField {
  return new MDTCalendarPropertyField(propertyKey, properties);
}
