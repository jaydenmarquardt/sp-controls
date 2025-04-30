import { jsx as _jsx } from "react/jsx-runtime";
import MDTPropertyFieldClass from "../base/PropertyControl";
import { DatePicker, } from "@fluentui/react/lib/DatePicker";
class MDTDatePropertyField extends MDTPropertyFieldClass {
    renderComponent() {
        return (_jsx(DatePicker, { value: this.value, onSelectDate: (date) => {
                this.updatePropertyValue(date.toUTCString());
            }, ...(this.props || {}) }));
    }
}
export default function PropertyDatePickerField(propertyKey, properties) {
    return new MDTDatePropertyField(propertyKey, properties);
}
//# sourceMappingURL=index.js.map