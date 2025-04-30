import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { type IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import Testing, { ITestingProps } from "./components/Testing";
import PropertyTextField from "@jmdt/spcontrols/dist/propertycontrols/textfield";
import PropertyCalendarField from "@jmdt/spcontrols/dist/propertycontrols/calendar";
import { DayOfWeek } from "@fluentui/react/lib/Calendar";
import PropertyColorField from "@jmdt/spcontrols/dist/propertycontrols/color";
import PropertyDaysOfWeekField from "@jmdt/spcontrols/dist/propertycontrols/dayOfWeek";
import PropertyDatePickerField from "@jmdt/spcontrols/dist/propertycontrols/date";
import PropertyTimePickerField from "@jmdt/spcontrols/dist/propertycontrols/time";

export interface ITestingWebPartProps {
  description: string;
  fluentui_calendar_field: string;
}

export default class TestingWebPart extends BaseClientSideWebPart<ITestingWebPartProps> {
  public render(): void {
    console.log("TestingWebPart render", { me: this, props: this.properties });
    const element: React.ReactElement<ITestingProps> = React.createElement(
      Testing,
      this.properties
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    return;
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
  protected onPropertyPaneFieldChanged(
    propertyPath: string,
    oldValue: any,
    newValue: any
  ): void {
    super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
    console.log("onPropertyPaneFieldChanged", {
      propertyPath,
      oldValue,
      newValue,
      me: this,
      props: this.properties,
    });
    this.render();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Testing Web Part",
          },
          groups: [
            {
              groupName: "Settings",
              groupFields: [
                PropertyTextField("fluentui_text_field", {
                  props: {
                    label: "Fluent UI TextField",
                    placeholder: "Enter text",
                  },
                  context: this.context,
                  webpartProperties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                }),
                PropertyDaysOfWeekField("fluentui_dow_field", {
                  props: {
                    label: "Day of week",
                  },
                  context: this.context,
                  webpartProperties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                }),

                PropertyDatePickerField("fluentui_date_field", {
                  props: {
                    label: "Fluent UI Date Picker",
                  },
                  context: this.context,
                  webpartProperties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                }),
                PropertyTimePickerField("fluentui_time_field", {
                  props: {
                    label: "Fluent UI Time picker",
                  },
                  context: this.context,
                  webpartProperties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                }),
                PropertyCalendarField("fluentui_calendar_field", {
                  props: {
                    label: "Fluent UI Calendar ",
                    mode: "callout",
                    canClear: true,
                    calendarProps: {
                      showGoToToday: true,
                      firstDayOfWeek: DayOfWeek.Sunday,
                    },
                    buttonProps: {
                      text: "Select a date",
                    },
                  },
                  context: this.context,
                  webpartProperties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                }),

                PropertyCalendarField("fluentui_calendar_inline_field", {
                  props: {
                    label: "Fluent UI Inline Calendar ",
                    mode: "inline",
                    canClear: true,
                    calendarProps: {
                      showGoToToday: true,
                      firstDayOfWeek: DayOfWeek.Sunday,
                    },
                    buttonProps: {
                      text: "Select a date",
                    },
                  },
                  context: this.context,
                  webpartProperties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                }),

                PropertyColorField("fluentui_color_field", {
                  props: {
                    label: "Fluent UI Color Picker",
                    mode: "callout",
                    canClear: true,
                    colorPickerProps: {},
                    buttonProps: {
                      text: "Select a color",
                    },
                  },
                  context: this.context,
                  webpartProperties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                }),
                PropertyColorField("fluentui_color_field_inline", {
                  props: {
                    label: "Fluent UI Color Picker Inline",
                    mode: "inline",
                    canClear: true,
                    colorPickerProps: {},
                    buttonProps: {
                      text: "Select a color",
                    },
                  },
                  context: this.context,
                  webpartProperties: this.properties,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
