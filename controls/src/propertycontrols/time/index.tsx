import MDTPropertyFieldClass, {
  IMDTPropertyFieldClassProps,
} from "../base/PropertyControl";
import {
  TimePicker,
  type ITimePickerProps,
} from "@fluentui/react/lib/TimePicker";

class MDTTimePropertyField extends MDTPropertyFieldClass<
  Partial<ITimePickerProps>
> {
  public renderComponent(): React.ReactElement {
    return (
      <TimePicker
        value={this.value}
        onChange={
          ((event: React.FormEvent, time: Date) => {
            this.updatePropertyValue(time.toUTCString());
          }) as any
        }
        {...(this.props || {})}
      />
    );
  }
}

export default function PropertyTimePickerField(
  propertyKey: string,
  properties: IMDTPropertyFieldClassProps<Partial<ITimePickerProps>>
): MDTPropertyFieldClass<Partial<ITimePickerProps>> {
  return new MDTTimePropertyField(propertyKey, properties);
}
