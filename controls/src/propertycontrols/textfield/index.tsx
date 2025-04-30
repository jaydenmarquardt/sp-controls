import MDTPropertyFieldClass, {
  IMDTPropertyFieldClassProps,
} from "../base/PropertyControl";
import { TextField, type ITextFieldProps } from "@fluentui/react/lib/TextField";

class MDTTextPropertyField extends MDTPropertyFieldClass<ITextFieldProps> {
  public renderComponent(): React.ReactElement {
    return (
      <TextField
        defaultValue={this.value}
        onChange={(e) => {
          this.updatePropertyValue(e.currentTarget.value);
        }}
        {...(this.props || {})}
      />
    );
  }
}

export default function PropertyTextField(
  propertyKey: string,
  properties: IMDTPropertyFieldClassProps<ITextFieldProps>
): MDTPropertyFieldClass<ITextFieldProps> {
  return new MDTTextPropertyField(propertyKey, properties);
}
