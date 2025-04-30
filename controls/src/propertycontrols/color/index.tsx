import { type IMDTPropertyFieldClassProps } from "../base/PropertyControl";
import MDTCalloutPropertyField, {
  type IMDTCalloutPropertyFieldProps,
} from "../base/PropertyCalloutButtonControl";
import { useEffect, useState } from "react";
import type { IColor } from "@fluentui/react/lib/Color";
import {
  ColorPicker,
  type IColorPickerProps,
} from "@fluentui/react/lib/ColorPicker";

export interface IMDTColorPropertyFieldProps
  extends IMDTCalloutPropertyFieldProps {
  colorPickerProps: Partial<IColorPickerProps>;
}

class MDTColorPickerPropertyField extends MDTCalloutPropertyField<IMDTColorPropertyFieldProps> {
  public renderCalloutContent(): React.ReactElement {
    return <Component control={this} value={this.value} />;
  }
}

const Component: React.FunctionComponent<{
  control: MDTColorPickerPropertyField;
  value: string | IColor;
}> = ({ value: propValue, control }) => {
  const [value, setValue] = useState(propValue);

  useEffect(() => {
    if (!propValue) return;
    const str = typeof propValue === "string" ? propValue : propValue?.str;
    control.setButtonLabel?.(str);
  }, [propValue]);

  return (
    <ColorPicker
      color={value}
      showPreview={true}
      onChange={(ev: any, colorObj: IColor) => {
        control.updatePropertyValue(colorObj);
        setValue(colorObj.hex);

        control.setButtonLabel?.(colorObj.str);
      }}
      {...(control.props?.colorPickerProps || {})}
    />
  );
};

export default function PropertyColorField(
  propertyKey: string,
  properties: IMDTPropertyFieldClassProps<IMDTColorPropertyFieldProps>
): MDTColorPickerPropertyField {
  return new MDTColorPickerPropertyField(propertyKey, properties);
}
