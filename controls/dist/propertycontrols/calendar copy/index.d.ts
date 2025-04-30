import { type ICalendarProps } from "@fluentui/react/lib/Calendar";
import { type IMDTPropertyFieldClassProps } from "../base/PropertyControl";
import MDTCalloutPropertyField, { type IMDTCalloutPropertyFieldProps } from "../base/PropertyCalloutButtonControl";
export interface IMDTCalendarPropertyFieldProps extends IMDTCalloutPropertyFieldProps {
    calendarProps: ICalendarProps;
}
declare class MDTCalendarPropertyField extends MDTCalloutPropertyField<IMDTCalendarPropertyFieldProps> {
    renderCalloutContent(): React.ReactElement;
}
export default function PropertyCalendarField(propertyKey: string, properties: IMDTPropertyFieldClassProps<IMDTCalendarPropertyFieldProps>): MDTCalendarPropertyField;
export {};
//# sourceMappingURL=index.d.ts.map