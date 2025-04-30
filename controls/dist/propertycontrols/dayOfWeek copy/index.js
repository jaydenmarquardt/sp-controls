import { jsx as _jsx } from "react/jsx-runtime";
import { Dropdown, } from "@fluentui/react/lib/Dropdown";
import MDTPropertyFieldClass from "../base/PropertyControl";
import { DayOfWeek } from "@fluentui/react/lib/Calendar";
const DAYS = [
    { text: "Sunday", key: DayOfWeek.Sunday },
    { text: "Monday", key: DayOfWeek.Monday },
    { text: "Tuesday", key: DayOfWeek.Tuesday },
    { text: "Wednesday", key: DayOfWeek.Wednesday },
    { text: "Thursday", key: DayOfWeek.Thursday },
    { text: "Friday", key: DayOfWeek.Friday },
    { text: "Saturday", key: DayOfWeek.Saturday },
];
class MDTDayOfWeekPropertyField extends MDTPropertyFieldClass {
    renderComponent() {
        return (_jsx(Dropdown, { options: DAYS, selectedKey: this.value, onChange: ((event, option) => {
                this.updatePropertyValue(option.key);
            }), ...(this.props || {}) }));
    }
}
export default function PropertyDaysOfWeekField(propertyKey, properties) {
    return new MDTDayOfWeekPropertyField(propertyKey, properties);
}
//# sourceMappingURL=index.js.map