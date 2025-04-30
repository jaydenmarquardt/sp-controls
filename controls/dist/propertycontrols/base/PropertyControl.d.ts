import { type IPropertyPaneField, PropertyPaneFieldType } from "@microsoft/sp-property-pane";
import { type BaseComponentContext } from "@microsoft/sp-component-base";
import * as React from "react";
export interface IMDTPropertyFieldClassProps<T> {
    key?: string;
    onRender?: (domElement: HTMLElement, context?: any, changeCallback?: (targetProperty?: string, newValue?: any, isValidEntry?: boolean) => void) => void;
    onDispose?: (domElement: HTMLElement, context?: any) => void;
    context?: BaseComponentContext;
    props: T;
    webpartProperties?: any;
    onPropertyChange?: (targetProperty: string, oldValue: any, newValue: any) => void;
}
export default abstract class MDTPropertyFieldClass<T> implements IPropertyPaneField<IMDTPropertyFieldClassProps<T>> {
    readonly type: PropertyPaneFieldType;
    targetProperty: string;
    props: T;
    properties: IMDTPropertyFieldClassProps<T>;
    elem: HTMLElement | null;
    shouldFocus?: boolean;
    protected context: BaseComponentContext;
    protected webpartProperties: any;
    protected value: any;
    protected onPropertyChange: (targetProperty: string, oldValue: any, newValue: any) => void;
    constructor(propertyKey: string, props: IMDTPropertyFieldClassProps<T>);
    render(): void;
    private onRender;
    protected onDispose(domElement: HTMLElement, context?: any): void;
    abstract renderComponent(): React.ReactElement;
    onPreRender(): Promise<void>;
    onPostRender(): Promise<void>;
    updatePropertyValue(newValue: any): Promise<void>;
}
//# sourceMappingURL=PropertyControl.d.ts.map