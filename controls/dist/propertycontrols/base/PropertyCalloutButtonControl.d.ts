import MDTPropertyFieldClass from "../base/PropertyControl";
import { type ICalloutProps } from "@fluentui/react/lib/Callout";
import { type IButtonProps } from "@fluentui/react/lib/Button";
export interface IMDTCalloutPropertyFieldProps {
    mode?: "callout" | "inline";
    canClear?: boolean;
    label?: string;
    buttonProps?: IButtonProps;
    calloutProps?: ICalloutProps;
}
export default class MDTCalloutPropertyField<T extends IMDTCalloutPropertyFieldProps> extends MDTPropertyFieldClass<T> {
    openCallout: () => void;
    closeCallout: () => void;
    toggleCallout: () => void;
    setButtonLabel: (newLabel: string) => void;
    renderComponent(): React.ReactElement;
    renderCalloutContent(): React.ReactElement;
}
//# sourceMappingURL=PropertyCalloutButtonControl.d.ts.map