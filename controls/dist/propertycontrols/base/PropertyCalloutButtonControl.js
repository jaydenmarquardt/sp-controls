import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import MDTPropertyFieldClass from "../base/PropertyControl";
import { useBoolean } from "@fluentui/react-hooks";
import { FocusTrapZone } from "@fluentui/react/lib/FocusTrapZone";
import { Callout, DirectionalHint, } from "@fluentui/react/lib/Callout";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Label } from "@fluentui/react/lib/Label";
const PropertyCallout = ({ buttonProps = {}, calloutProps = {}, onReady, mode, label, children, canClear, onClear, }) => {
    const [showing, { toggle: toggleShow, setFalse: hide, setTrue: show }] = useBoolean(false);
    const [buttonLabel, setButtonLabel] = useState(buttonProps?.text || "Open");
    const buttonContainerRef = useRef(null);
    useEffect(() => {
        onReady?.(show, hide, toggleShow, (newLabel) => setButtonLabel(newLabel || buttonProps?.text || "Open"));
    }, []);
    console.log("render PropertyCallout", { buttonLabel, buttonProps });
    return (_jsxs("div", { className: "mdt-callout-property-field", children: [label && _jsx(Label, { children: label }), mode === "callout" ? (_jsx("div", { children: _jsxs("div", { children: [_jsxs("div", { ref: buttonContainerRef, style: { display: "flex", gap: "5px" }, children: [_jsx(DefaultButton, { style: { width: "100%" }, onClick: toggleShow, ...buttonProps, text: buttonLabel }), canClear && (_jsx(DefaultButton, { onClick: onClear, iconProps: { iconName: "Clear" } }))] }), showing && (_jsx(Callout, { isBeakVisible: false, gapSpace: 0, doNotLayer: false, target: buttonContainerRef, directionalHint: DirectionalHint.bottomLeftEdge, onDismiss: hide, setInitialFocus: true, ...calloutProps, children: _jsx(FocusTrapZone, { isClickableOutsideFocusTrap: true, children: children }) }))] }) })) : (_jsxs("div", { style: { overflow: "scroll" }, children: [_jsx("span", { children: buttonLabel }), children, canClear && (_jsx(DefaultButton, { onClick: onClear, iconProps: { iconName: "Clear" }, text: "Clear" }))] }))] }));
};
export default class MDTCalloutPropertyField extends MDTPropertyFieldClass {
    openCallout = () => {
        if (this.props?.mode !== "callout") {
            throw new Error("Callout is not in callout mode.");
        }
        throw new Error("Callout is not ready yet.");
    };
    closeCallout = () => {
        if (this.props?.mode !== "callout") {
            throw new Error("Callout is not in callout mode.");
        }
        throw new Error("Callout is not ready yet.");
    };
    toggleCallout = () => {
        if (this.props?.mode !== "callout") {
            throw new Error("Callout is not in callout mode.");
        }
        throw new Error("Callout is not ready yet.");
    };
    setButtonLabel;
    renderComponent() {
        const { mode = "callout", label, buttonProps, calloutProps, canClear, } = this.props || {};
        const component = this.renderCalloutContent();
        return (_jsx(PropertyCallout, { label: label, mode: mode, buttonProps: buttonProps, calloutProps: calloutProps, canClear: canClear, onClear: () => {
                this.updatePropertyValue(undefined);
                this.setButtonLabel?.(undefined);
            }, onReady: (show, hide, toggle, setButtonLabel) => {
                this.openCallout = () => show();
                this.closeCallout = () => hide();
                this.toggleCallout = () => toggle();
                this.setButtonLabel = (newLabel) => setButtonLabel(newLabel);
            }, children: component }));
    }
    renderCalloutContent() {
        return (_jsx("div", { className: "mdt-callout-property-content", children: "Not implemented yet." }));
    }
}
//# sourceMappingURL=PropertyCalloutButtonControl.js.map