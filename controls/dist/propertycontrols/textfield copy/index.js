import { jsx as _jsx } from "react/jsx-runtime";
import MDTPropertyFieldClass from "../base/PropertyControl";
import { TextField } from "@fluentui/react/lib/TextField";
class MDTTextPropertyField extends MDTPropertyFieldClass {
    renderComponent() {
        return (_jsx(TextField, { defaultValue: this.value, onChange: (e) => {
                this.updatePropertyValue(e.currentTarget.value);
            }, ...(this.props || {}) }));
    }
}
export default function PropertyTextField(propertyKey, properties) {
    return new MDTTextPropertyField(propertyKey, properties);
}
//# sourceMappingURL=index.js.map