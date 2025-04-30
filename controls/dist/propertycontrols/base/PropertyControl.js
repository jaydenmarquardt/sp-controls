import { PropertyPaneFieldType, } from "@microsoft/sp-property-pane";
import * as ReactDom from "react-dom";
import { update, get } from "@microsoft/sp-lodash-subset";
export default class MDTPropertyFieldClass {
    type = PropertyPaneFieldType.Custom;
    targetProperty;
    props;
    properties;
    elem = null;
    shouldFocus;
    context;
    webpartProperties;
    value;
    onPropertyChange = (targetProperty, oldValue, newValue) => {
        // This is a placeholder function
    };
    constructor(propertyKey, props) {
        if (!propertyKey) {
            throw new Error("MDTPropertyFieldClass: Custom field key must not be undefined");
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
    render() {
        if (!this.elem) {
            return;
        }
        this.onRender(this.elem);
    }
    async onRender(elem, ctx, changeCallback) {
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
        }
        catch (err) {
            throw new Error("MDTPropertyFieldClass: Error in onRender");
        }
    }
    onDispose(domElement, context) {
        ReactDom.unmountComponentAtNode(domElement);
    }
    async onPreRender() {
        // Override this method to do any pre-rendering tasks
        return Promise.resolve();
    }
    async onPostRender() {
        // Override this method to do any post-rendering tasks
        return Promise.resolve();
    }
    async updatePropertyValue(newValue) {
        const oldValue = get(this.webpartProperties, this.targetProperty);
        update(this.webpartProperties, this.targetProperty, () => {
            return newValue;
        });
        this.onPropertyChange(this.targetProperty, oldValue, newValue);
        this.value = newValue;
    }
}
//# sourceMappingURL=PropertyControl.js.map