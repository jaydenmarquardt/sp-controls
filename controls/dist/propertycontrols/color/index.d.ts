import { type IMDTPropertyFieldClassProps } from "../base/PropertyControl";
import MDTCalloutPropertyField, { type IMDTCalloutPropertyFieldProps } from "../base/PropertyCalloutButtonControl";
import { type IColorPickerProps } from "@fluentui/react/lib/ColorPicker";
export interface IMDTColorPropertyFieldProps extends IMDTCalloutPropertyFieldProps {
    colorPickerProps: Partial<IColorPickerProps>;
}
declare class MDTColorPickerPropertyField extends MDTCalloutPropertyField<IMDTColorPropertyFieldProps> {
    renderCalloutContent(): React.ReactElement;
}
export default function PropertyColorField(propertyKey: string, properties: IMDTPropertyFieldClassProps<IMDTColorPropertyFieldProps>): MDTColorPickerPropertyField;
export {};
//# sourceMappingURL=index.d.ts.map