import { jsx as _jsx } from "react/jsx-runtime";
import MDTPropertyFieldClass from "../base/PropertyControl";
import { TimePicker, } from "@fluentui/react/lib/TimePicker";
class MDTTimePropertyField extends MDTPropertyFieldClass {
    renderComponent() {
        return (_jsx(TimePicker, { value: this.value, onChange: ((event, time) => {
                this.updatePropertyValue(time.toUTCString());
            }), ...(this.props || {}) }));
    }
}
export default function PropertyTimePickerField(propertyKey, properties) {
    return new MDTTimePropertyField(propertyKey, properties);
}
//# sourceMappingURL=index.js.map