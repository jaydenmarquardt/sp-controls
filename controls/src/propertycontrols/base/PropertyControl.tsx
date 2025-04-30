import {
  type IPropertyPaneField,
  PropertyPaneFieldType,
} from "@microsoft/sp-property-pane";
import { type BaseComponentContext } from "@microsoft/sp-component-base";
import * as ReactDom from "react-dom";
import * as React from "react";
import { update, get } from "@microsoft/sp-lodash-subset";

export interface IMDTPropertyFieldClassProps<T> {
  //Required props from IPropertyPaneCustomFieldProps
  key?: string;
  onRender?: (
    domElement: HTMLElement,
    context?: any,
    changeCallback?: (
      targetProperty?: string,
      newValue?: any,
      isValidEntry?: boolean
    ) => void
  ) => void;
  onDispose?: (domElement: HTMLElement, context?: any) => void;
  context?: BaseComponentContext;

  props: T;
  webpartProperties?: any;
  onPropertyChange?: (
    targetProperty: string,
    oldValue: any,
    newValue: any
  ) => void;
}

export default abstract class MDTPropertyFieldClass<T>
  implements IPropertyPaneField<IMDTPropertyFieldClassProps<T>>
{
  public readonly type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
  public targetProperty: string;
  public props: T;
  public properties: IMDTPropertyFieldClassProps<T>;
  public elem: HTMLElement | null = null;

  public shouldFocus?: boolean;
  protected context: BaseComponentContext;
  protected webpartProperties: any;
  protected value: any;
  protected onPropertyChange: (
    targetProperty: string,
    oldValue: any,
    newValue: any
  ) => void = (targetProperty: string, oldValue: any, newValue: any) => {
    // This is a placeholder function
  };

  public constructor(
    propertyKey: string,
    props: IMDTPropertyFieldClassProps<T>
  ) {
    if (!propertyKey) {
      throw new Error(
        "MDTPropertyFieldClass: Custom field key must not be undefined"
      );
    }
    this.targetProperty = propertyKey;

    this.context = props?.context;
    this.webpartProperties = props?.webpartProperties;
    this.onPropertyChange = props?.onPropertyChange;
    this.props = props.props;

    this.properties = props;
    this.properties.key = propertyKey;
    this.properties.onRender = this.onRender.bind(this);
    this.properties.onDispose = this.onDispose.bind(this);
    this.value = this.webpartProperties?.[this.targetProperty];
  }

  public render(): void {
    if (!this.elem) {
      return;
    }

    this.onRender(this.elem);
  }

  private async onRender(
    elem: HTMLElement,
    ctx?: any,
    changeCallback?: (targetProperty?: string, newValue?: any) => void
  ): Promise<void> {
    if (!this.elem) {
      this.elem = elem;
    }
    try {
      await this.onPreRender();

      const element = this.renderComponent();
      if (!element) {
        throw new Error("MDTPropertyFieldClass: renderComponent returned null");
      }

      ReactDom.render(element, this.elem);
      await this.onPostRender();
    } catch (err) {
      throw new Error("MDTPropertyFieldClass: Error in onRender");
    }
  }

  protected onDispose(domElement: HTMLElement, context?: any): void {
    ReactDom.unmountComponentAtNode(domElement);
  }

  public abstract renderComponent(): React.ReactElement;

  public async onPreRender(): Promise<void> {
    // Override this method to do any pre-rendering tasks
    return Promise.resolve();
  }
  public async onPostRender(): Promise<void> {
    // Override this method to do any post-rendering tasks
    return Promise.resolve();
  }

  public async updatePropertyValue(newValue: any): Promise<void> {
    const oldValue = get(this.webpartProperties, this.targetProperty);
    update(this.webpartProperties, this.targetProperty, (): any => {
      return newValue;
    });
    this.onPropertyChange(this.targetProperty, oldValue, newValue);
    this.value = newValue;
  }
}
