import { jsx as _jsx } from "react/jsx-runtime";
import MDTCalloutPropertyField from "../base/PropertyCalloutButtonControl";
import { useEffect, useState } from "react";
import { ColorPicker, } from "@fluentui/react/lib/ColorPicker";
class MDTColorPickerPropertyField extends MDTCalloutPropertyField {
    renderCalloutContent() {
        return _jsx(Component, { control: this, value: this.value });
    }
}
const Component = ({ value: propValue, control }) => {
    const [value, setValue] = useState(propValue);
    useEffect(() => {
        if (!propValue)
            return;
        const str = typeof propValue === "string" ? propValue : propValue?.str;
        control.setButtonLabel?.(str);
    }, [propValue]);
    return (_jsx(ColorPicker, { color: value, showPreview: true, onChange: (ev, colorObj) => {
            control.updatePropertyValue(colorObj);
            setValue(colorObj.hex);
            control.setButtonLabel?.(colorObj.str);
        }, ...(control.props?.colorPickerProps || {}) }));
};
export default function PropertyColorField(propertyKey, properties) {
    return new MDTColorPickerPropertyField(propertyKey, properties);
}
//# sourceMappingURL=index.js.map