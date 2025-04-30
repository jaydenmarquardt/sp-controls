import { useEffect, useRef, useState } from "react";
import MDTPropertyFieldClass from "../base/PropertyControl";
import { useBoolean } from "@fluentui/react-hooks";

import { FocusTrapZone } from "@fluentui/react/lib/FocusTrapZone";
import {
  Callout,
  DirectionalHint,
  type ICalloutProps,
} from "@fluentui/react/lib/Callout";
import { DefaultButton, type IButtonProps } from "@fluentui/react/lib/Button";
import { Label } from "@fluentui/react/lib/Label";

export interface IMDTCalloutPropertyFieldProps {
  mode?: "callout" | "inline";
  canClear?: boolean;
  label?: string;
  buttonProps?: IButtonProps;
  calloutProps?: ICalloutProps;
}

const PropertyCallout: React.FunctionComponent<{
  mode?: "callout" | "inline";
  label?: string;
  canClear?: boolean;

  buttonProps?: IButtonProps;
  calloutProps?: ICalloutProps;
  children?: React.ReactNode;
  buttonLabel?: (value: any) => string;
  onClear?: () => void;
  onReady?: (
    show: () => void,
    hide: () => void,
    toggle: () => void,
    setButtonLabel: (newLabel: string) => void
  ) => void;
}> = ({
  buttonProps = {},
  calloutProps = {},
  onReady,
  mode,
  label,
  children,
  canClear,
  onClear,
}) => {
  const [showing, { toggle: toggleShow, setFalse: hide, setTrue: show }] =
    useBoolean(false);
  const [buttonLabel, setButtonLabel] = useState(buttonProps?.text || "Open");
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onReady?.(show, hide, toggleShow, (newLabel: string) =>
      setButtonLabel(newLabel || buttonProps?.text || "Open")
    );
  }, []);
  console.log("render PropertyCallout", { buttonLabel, buttonProps });
  return (
    <div className="mdt-callout-property-field">
      {label && <Label>{label}</Label>}
      {mode === "callout" ? (
        <div>
          <div>
            <div
              ref={buttonContainerRef}
              style={{ display: "flex", gap: "5px" }}
            >
              <DefaultButton
                style={{ width: "100%" }}
                onClick={toggleShow}
                {...buttonProps}
                text={buttonLabel}
              />
              {canClear && (
                <DefaultButton
                  onClick={onClear}
                  iconProps={{ iconName: "Clear" }}
                />
              )}
            </div>
            {showing && (
              <Callout
                isBeakVisible={false}
                gapSpace={0}
                doNotLayer={false}
                target={buttonContainerRef}
                directionalHint={DirectionalHint.bottomLeftEdge}
                onDismiss={hide}
                setInitialFocus
                {...calloutProps}
              >
                <FocusTrapZone isClickableOutsideFocusTrap>
                  {children}
                </FocusTrapZone>
              </Callout>
            )}
          </div>
        </div>
      ) : (
        <div style={{ overflow: "scroll" }}>
          <span>{buttonLabel}</span>
          {children}
          {canClear && (
            <DefaultButton
              onClick={onClear}
              iconProps={{ iconName: "Clear" }}
              text="Clear"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default class MDTCalloutPropertyField<
  T extends IMDTCalloutPropertyFieldProps
> extends MDTPropertyFieldClass<T> {
  public openCallout: () => void = () => {
    if (this.props?.mode !== "callout") {
      throw new Error("Callout is not in callout mode.");
    }
    throw new Error("Callout is not ready yet.");
  };

  public closeCallout: () => void = () => {
    if (this.props?.mode !== "callout") {
      throw new Error("Callout is not in callout mode.");
    }
    throw new Error("Callout is not ready yet.");
  };
  public toggleCallout: () => void = () => {
    if (this.props?.mode !== "callout") {
      throw new Error("Callout is not in callout mode.");
    }
    throw new Error("Callout is not ready yet.");
  };
  public setButtonLabel: (newLabel: string) => void;

  public renderComponent(): React.ReactElement {
    const {
      mode = "callout",
      label,
      buttonProps,
      calloutProps,
      canClear,
    } = this.props || {};
    const component = this.renderCalloutContent();
    return (
      <PropertyCallout
        label={label}
        mode={mode}
        buttonProps={buttonProps}
        calloutProps={calloutProps}
        canClear={canClear}
        onClear={() => {
          this.updatePropertyValue(undefined);
          this.setButtonLabel?.(undefined);
        }}
        onReady={(show, hide, toggle, setButtonLabel) => {
          this.openCallout = () => show();
          this.closeCallout = () => hide();
          this.toggleCallout = () => toggle();
          this.setButtonLabel = (newLabel: string) => setButtonLabel(newLabel);
        }}
      >
        {component}
      </PropertyCallout>
    );
  }

  public renderCalloutContent(): React.ReactElement {
    return (
      <div className="mdt-callout-property-content">Not implemented yet.</div>
    );
  }
}
