import * as _ from "@microsoft/sp-lodash-subset";
export const setPropertyValue = (properties, targetProperty, value) => {
    // eslint-disable-line @typescript-eslint/no-explicit-any
    if (!properties) {
        return;
    }
    if (targetProperty.indexOf(".") === -1) {
        // simple prop
        properties[targetProperty] = value;
    }
    else {
        _.set(properties, targetProperty, value);
    }
};
//# sourceMappingURL=Helper.js.map