import { jsx as _jsx } from "react/jsx-runtime";
import { Calendar } from "@fluentui/react/lib/Calendar";
import MDTCalloutPropertyField from "../base/PropertyCalloutButtonControl";
import { useEffect, useState } from "react";
class MDTCalendarPropertyField extends MDTCalloutPropertyField {
    renderCalloutContent() {
        return _jsx(Component, { control: this, value: this.value });
    }
}
const Component = ({ value: propValue, control }) => {
    const [value, setValue] = useState(propValue ? new Date(propValue) : undefined);
    useEffect(() => {
        if (!propValue)
            return;
        const date = new Date(propValue);
        control.setButtonLabel?.(date?.toUTCString());
    }, [propValue]);
    return (_jsx(Calendar, { value: value, onSelectDate: (date) => {
            control.updatePropertyValue(date.toUTCString());
            control.closeCallout();
            setValue(date);
            control.setButtonLabel?.(date.toUTCString());
        }, ...(control.props?.calendarProps || {}) }));
};
export default function PropertyCalendarField(propertyKey, properties) {
    return new MDTCalendarPropertyField(propertyKey, properties);
}
//# sourceMappingURL=index.js.map