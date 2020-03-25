/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FwButton {
        /**
          * The theme of the button, Values are : `primary`, `secondary`, `danger`
         */
        "color": "primary" | "secondary" | "danger" | "link" | "text";
        /**
          * Sets the button as disabled when set to true.
         */
        "disabled": boolean;
        /**
          * Sets the button size to block when set to true.
         */
        "expand": boolean;
        /**
          * The size of the button, Values are : `normal`, `mini`
         */
        "size": "normal" | "mini" | "small";
        /**
          * The native button type: values: `button`, `reset`, `submit`
         */
        "type": "button" | "reset" | "submit";
    }
    interface FwCheckbox {
        /**
          * Property to maintain checked state
         */
        "checked": boolean;
        /**
          * Disables the checkbox
         */
        "disabled": boolean;
        /**
          * Label for checkbox
         */
        "label": string;
        /**
          * Value of the checkbox for within a form
         */
        "value": string;
    }
    interface FwIcon {
        /**
          * The color of the icon in CSS standard color
         */
        "color": string;
        /**
          * The name of the icon
         */
        "name": string;
        /**
          * The size of the icon in pixels
         */
        "size": number;
    }
    interface FwInput {
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete": "on" | "off";
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * Indicates that this control is disabled
         */
        "disabled": boolean;
        /**
          * Name of the icon for left side
         */
        "iconLeft": string;
        /**
          * Name of the icon for right side
         */
        "iconRight": string;
        /**
          * The type of control to display. The default type is text.
         */
        "label": string;
        /**
          * Max length of value
         */
        "maxlength"?: number;
        /**
          * Min length of value
         */
        "minlength"?: number;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * Sets focus on the specified `fw-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The state of the control. Color changes accordingly
         */
        "state": "normal" | "warning" | "error";
        /**
          * This text will be displayed below the input box indicating the state/hint
         */
        "stateText": string;
        /**
          * The type of control to display. The default type is text.
         */
        "type": "text";
        /**
          * The value of the input.
         */
        "value"?: string | null;
    }
    interface FwLabel {
        /**
          * The type of the label
         */
        "color": "blue" | "red" | "green" | "yellow" | "grey" | "normal";
        /**
          * The text in the label
         */
        "value": string;
    }
    interface FwRadio {
        /**
          * Property to maintain checked state
         */
        "checked": boolean;
        /**
          * Disables the radio button
         */
        "disabled": boolean;
        /**
          * Label for radio button
         */
        "label": string;
        /**
          * Value of the name for within a form
         */
        "name": string;
        /**
          * Value of the radio button for within a form
         */
        "value": string;
    }
    interface FwRadioGroup {
        /**
          * If `true`, the radios can be deselected.
         */
        "allowEmpty": boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * the value of the radio group.
         */
        "value"?: any | null;
    }
    interface FwSelect {
        /**
          * Indicates that this control is disabled
         */
        "disabled": boolean;
        /**
          * If true, the user must select some value. The default wont be shown
         */
        "forceSelect": boolean;
        "getSelectedItem": () => Promise<any>;
        /**
          * Label displayed on the interface, for the component.
         */
        "label": string;
        /**
          * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to true.
         */
        "multiple": boolean;
        /**
          * Name of the component, saved as part of form data.
         */
        "name": string;
        /**
          * Text displayed in the control before an option is selected.
         */
        "placeholder"?: string | null;
        /**
          * If true, the user cannot modify the value.
         */
        "readonly": boolean;
        /**
          * Specifies the input control as a mandatory field. If the attribute’s value is undefined, the value is set to true.
         */
        "required": boolean;
        /**
          * The state of the control. Color changes accordingly
         */
        "state": "normal" | "warning" | "error";
        /**
          * This text will be displayed below the input box indicating the state/hint
         */
        "stateText": string;
        /**
          * The type of control to display. The default type is text.
         */
        "type": "text" | "number";
        /**
          * Value of the option that is displayed as the default selection, in the input control.
         */
        "value": any;
    }
    interface FwSelectOption {
        /**
          * if option is html
         */
        "html": boolean;
        /**
          * Object containing html and text for option
         */
        "htmlContent"?: string;
        /**
          * if option is html and alternate text is needed for label
         */
        "optionText": string;
        /**
          * Flag to indicate if the option is selected or not. A tick is shown
         */
        "selected": boolean;
        /**
          * The Key associated with this select option
         */
        "value": string;
    }
    interface FwSpinner {
        /**
          * The color of the spinner
         */
        "color": string;
        /**
          * The size of the spinner - Options ['small' , 'default', 'medium', 'large']
         */
        "size": "small" | "default" | "medium" | "large";
    }
    interface FwTab {
        /**
          * The Message
         */
        "message": string;
        /**
          * The Title
         */
        "title": string;
    }
    interface FwTabs {
    }
    interface FwTag {
        /**
          * The display text for the tag
         */
        "text": string;
        /**
          * The value of the tag
         */
        "value": string;
    }
    interface FwTextarea {
        /**
          * Number of columns
         */
        "cols"?: number;
        /**
          * Indicates that this control is disabled
         */
        "disabled": boolean;
        /**
          * The type of control to display. The default type is text.
         */
        "label": string;
        /**
          * Max length of value
         */
        "maxlength"?: number;
        /**
          * Min length of value
         */
        "minlength"?: number;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * Number of rows
         */
        "rows"?: number;
        /**
          * Sets focus on the specified `fw-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The state of the control. Color changes accordingly
         */
        "state": "normal" | "warning" | "error";
        /**
          * This text will be displayed below the input box indicating the state/hint
         */
        "stateText": string;
        /**
          * The value of the input.
         */
        "value"?: string | null;
        /**
          * How the text in the textarea is to be wrapped
         */
        "wrap": "soft" | "hard";
    }
    interface FwTimepicker {
        /**
          * Format of the time for input and output
         */
        "hourFormat": string;
        /**
          * interval bw two time in minutes
         */
        "interval": number;
        /**
          * Max time
         */
        "maxTime"?: string;
        /**
          * Min  time
         */
        "minTime"?: string;
        /**
          * time output value
         */
        "timeValue"?: string;
    }
    interface FwToggle {
        "checked": boolean;
        /**
          * Is it disabled
         */
        "disabled": boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * The type of control to display. The default type is text.
         */
        "size": "small" | "medium" | "large";
    }
}
declare global {
    interface HTMLFwButtonElement extends Components.FwButton, HTMLStencilElement {
    }
    var HTMLFwButtonElement: {
        prototype: HTMLFwButtonElement;
        new (): HTMLFwButtonElement;
    };
    interface HTMLFwCheckboxElement extends Components.FwCheckbox, HTMLStencilElement {
    }
    var HTMLFwCheckboxElement: {
        prototype: HTMLFwCheckboxElement;
        new (): HTMLFwCheckboxElement;
    };
    interface HTMLFwIconElement extends Components.FwIcon, HTMLStencilElement {
    }
    var HTMLFwIconElement: {
        prototype: HTMLFwIconElement;
        new (): HTMLFwIconElement;
    };
    interface HTMLFwInputElement extends Components.FwInput, HTMLStencilElement {
    }
    var HTMLFwInputElement: {
        prototype: HTMLFwInputElement;
        new (): HTMLFwInputElement;
    };
    interface HTMLFwLabelElement extends Components.FwLabel, HTMLStencilElement {
    }
    var HTMLFwLabelElement: {
        prototype: HTMLFwLabelElement;
        new (): HTMLFwLabelElement;
    };
    interface HTMLFwRadioElement extends Components.FwRadio, HTMLStencilElement {
    }
    var HTMLFwRadioElement: {
        prototype: HTMLFwRadioElement;
        new (): HTMLFwRadioElement;
    };
    interface HTMLFwRadioGroupElement extends Components.FwRadioGroup, HTMLStencilElement {
    }
    var HTMLFwRadioGroupElement: {
        prototype: HTMLFwRadioGroupElement;
        new (): HTMLFwRadioGroupElement;
    };
    interface HTMLFwSelectElement extends Components.FwSelect, HTMLStencilElement {
    }
    var HTMLFwSelectElement: {
        prototype: HTMLFwSelectElement;
        new (): HTMLFwSelectElement;
    };
    interface HTMLFwSelectOptionElement extends Components.FwSelectOption, HTMLStencilElement {
    }
    var HTMLFwSelectOptionElement: {
        prototype: HTMLFwSelectOptionElement;
        new (): HTMLFwSelectOptionElement;
    };
    interface HTMLFwSpinnerElement extends Components.FwSpinner, HTMLStencilElement {
    }
    var HTMLFwSpinnerElement: {
        prototype: HTMLFwSpinnerElement;
        new (): HTMLFwSpinnerElement;
    };
    interface HTMLFwTabElement extends Components.FwTab, HTMLStencilElement {
    }
    var HTMLFwTabElement: {
        prototype: HTMLFwTabElement;
        new (): HTMLFwTabElement;
    };
    interface HTMLFwTabsElement extends Components.FwTabs, HTMLStencilElement {
    }
    var HTMLFwTabsElement: {
        prototype: HTMLFwTabsElement;
        new (): HTMLFwTabsElement;
    };
    interface HTMLFwTagElement extends Components.FwTag, HTMLStencilElement {
    }
    var HTMLFwTagElement: {
        prototype: HTMLFwTagElement;
        new (): HTMLFwTagElement;
    };
    interface HTMLFwTextareaElement extends Components.FwTextarea, HTMLStencilElement {
    }
    var HTMLFwTextareaElement: {
        prototype: HTMLFwTextareaElement;
        new (): HTMLFwTextareaElement;
    };
    interface HTMLFwTimepickerElement extends Components.FwTimepicker, HTMLStencilElement {
    }
    var HTMLFwTimepickerElement: {
        prototype: HTMLFwTimepickerElement;
        new (): HTMLFwTimepickerElement;
    };
    interface HTMLFwToggleElement extends Components.FwToggle, HTMLStencilElement {
    }
    var HTMLFwToggleElement: {
        prototype: HTMLFwToggleElement;
        new (): HTMLFwToggleElement;
    };
    interface HTMLElementTagNameMap {
        "fw-button": HTMLFwButtonElement;
        "fw-checkbox": HTMLFwCheckboxElement;
        "fw-icon": HTMLFwIconElement;
        "fw-input": HTMLFwInputElement;
        "fw-label": HTMLFwLabelElement;
        "fw-radio": HTMLFwRadioElement;
        "fw-radio-group": HTMLFwRadioGroupElement;
        "fw-select": HTMLFwSelectElement;
        "fw-select-option": HTMLFwSelectOptionElement;
        "fw-spinner": HTMLFwSpinnerElement;
        "fw-tab": HTMLFwTabElement;
        "fw-tabs": HTMLFwTabsElement;
        "fw-tag": HTMLFwTagElement;
        "fw-textarea": HTMLFwTextareaElement;
        "fw-timepicker": HTMLFwTimepickerElement;
        "fw-toggle": HTMLFwToggleElement;
    }
}
declare namespace LocalJSX {
    interface FwButton {
        /**
          * The theme of the button, Values are : `primary`, `secondary`, `danger`
         */
        "color"?: "primary" | "secondary" | "danger" | "link" | "text";
        /**
          * Sets the button as disabled when set to true.
         */
        "disabled"?: boolean;
        /**
          * Sets the button size to block when set to true.
         */
        "expand"?: boolean;
        /**
          * Emitted when the checbox loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button is clicked.
         */
        "onFwClick"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the checkbox has focus.
         */
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        /**
          * The size of the button, Values are : `normal`, `mini`
         */
        "size"?: "normal" | "mini" | "small";
        /**
          * The native button type: values: `button`, `reset`, `submit`
         */
        "type"?: "button" | "reset" | "submit";
    }
    interface FwCheckbox {
        /**
          * Property to maintain checked state
         */
        "checked"?: boolean;
        /**
          * Disables the checkbox
         */
        "disabled"?: boolean;
        /**
          * Label for checkbox
         */
        "label"?: string;
        /**
          * Emitted when the checbox loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the checkbox value has changed.
         */
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the checkbox has focus.
         */
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Value of the checkbox for within a form
         */
        "value"?: string;
    }
    interface FwIcon {
        /**
          * The color of the icon in CSS standard color
         */
        "color"?: string;
        /**
          * The name of the icon
         */
        "name"?: string;
        /**
          * The size of the icon in pixels
         */
        "size"?: number;
    }
    interface FwInput {
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete"?: "on" | "off";
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * Indicates that this control is disabled
         */
        "disabled"?: boolean;
        /**
          * Name of the icon for left side
         */
        "iconLeft"?: string;
        /**
          * Name of the icon for right side
         */
        "iconRight"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "label"?: string;
        /**
          * Max length of value
         */
        "maxlength"?: number;
        /**
          * Min length of value
         */
        "minlength"?: number;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        "onFwChange"?: (event: CustomEvent<any>) => void;
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        "onFwInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The state of the control. Color changes accordingly
         */
        "state"?: "normal" | "warning" | "error";
        /**
          * This text will be displayed below the input box indicating the state/hint
         */
        "stateText"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type"?: "text";
        /**
          * The value of the input.
         */
        "value"?: string | null;
    }
    interface FwLabel {
        /**
          * The type of the label
         */
        "color"?: "blue" | "red" | "green" | "yellow" | "grey" | "normal";
        /**
          * The text in the label
         */
        "value"?: string;
    }
    interface FwRadio {
        /**
          * Property to maintain checked state
         */
        "checked"?: boolean;
        /**
          * Disables the radio button
         */
        "disabled"?: boolean;
        /**
          * Label for radio button
         */
        "label"?: string;
        /**
          * Value of the name for within a form
         */
        "name"?: string;
        /**
          * Emitted when the checbox loses focus.
         */
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the radio button value has changed.
         */
        "onFwDeselect"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the radio button has focus.
         */
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the radio button value has changed.
         */
        "onFwSelect"?: (event: CustomEvent<any>) => void;
        /**
          * Value of the radio button for within a form
         */
        "value"?: string;
    }
    interface FwRadioGroup {
        /**
          * If `true`, the radios can be deselected.
         */
        "allowEmpty"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the value has changed.
         */
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * the value of the radio group.
         */
        "value"?: any | null;
    }
    interface FwSelect {
        /**
          * Indicates that this control is disabled
         */
        "disabled"?: boolean;
        /**
          * If true, the user must select some value. The default wont be shown
         */
        "forceSelect"?: boolean;
        /**
          * Label displayed on the interface, for the component.
         */
        "label"?: string;
        /**
          * Enables selection of multiple options. If the attribute’s value is undefined, the value is set to true.
         */
        "multiple"?: boolean;
        /**
          * Name of the component, saved as part of form data.
         */
        "name"?: string;
        "onFwBlur"?: (event: CustomEvent<any>) => void;
        "onFwChange"?: (event: CustomEvent<any>) => void;
        "onFwFocus"?: (event: CustomEvent<any>) => void;
        /**
          * Text displayed in the control before an option is selected.
         */
        "placeholder"?: string | null;
        /**
          * If true, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * Specifies the input control as a mandatory field. If the attribute’s value is undefined, the value is set to true.
         */
        "required"?: boolean;
        /**
          * The state of the control. Color changes accordingly
         */
        "state"?: "normal" | "warning" | "error";
        /**
          * This text will be displayed below the input box indicating the state/hint
         */
        "stateText"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type"?: "text" | "number";
        /**
          * Value of the option that is displayed as the default selection, in the input control.
         */
        "value"?: any;
    }
    interface FwSelectOption {
        /**
          * if option is html
         */
        "html"?: boolean;
        /**
          * Object containing html and text for option
         */
        "htmlContent"?: string;
        "onFwSelected"?: (event: CustomEvent<any>) => void;
        /**
          * if option is html and alternate text is needed for label
         */
        "optionText"?: string;
        /**
          * Flag to indicate if the option is selected or not. A tick is shown
         */
        "selected"?: boolean;
        /**
          * The Key associated with this select option
         */
        "value"?: string;
    }
    interface FwSpinner {
        /**
          * The color of the spinner
         */
        "color"?: string;
        /**
          * The size of the spinner - Options ['small' , 'default', 'medium', 'large']
         */
        "size"?: "small" | "default" | "medium" | "large";
    }
    interface FwTab {
        /**
          * The Message
         */
        "message"?: string;
        /**
          * The Title
         */
        "title"?: string;
    }
    interface FwTabs {
    }
    interface FwTag {
        "onFwClosed"?: (event: CustomEvent<any>) => void;
        /**
          * The display text for the tag
         */
        "text"?: string;
        /**
          * The value of the tag
         */
        "value"?: string;
    }
    interface FwTextarea {
        /**
          * Number of columns
         */
        "cols"?: number;
        /**
          * Indicates that this control is disabled
         */
        "disabled"?: boolean;
        /**
          * The type of control to display. The default type is text.
         */
        "label"?: string;
        /**
          * Max length of value
         */
        "maxlength"?: number;
        /**
          * Min length of value
         */
        "minlength"?: number;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        "onFwBlur"?: (event: CustomEvent<void>) => void;
        "onFwChange"?: (event: CustomEvent<any>) => void;
        "onFwFocus"?: (event: CustomEvent<void>) => void;
        "onFwInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * Number of rows
         */
        "rows"?: number;
        /**
          * The state of the control. Color changes accordingly
         */
        "state"?: "normal" | "warning" | "error";
        /**
          * This text will be displayed below the input box indicating the state/hint
         */
        "stateText"?: string;
        /**
          * The value of the input.
         */
        "value"?: string | null;
        /**
          * How the text in the textarea is to be wrapped
         */
        "wrap"?: "soft" | "hard";
    }
    interface FwTimepicker {
        /**
          * Format of the time for input and output
         */
        "hourFormat"?: string;
        /**
          * interval bw two time in minutes
         */
        "interval"?: number;
        /**
          * Max time
         */
        "maxTime"?: string;
        /**
          * Min  time
         */
        "minTime"?: string;
        /**
          * time output value
         */
        "timeValue"?: string;
    }
    interface FwToggle {
        "checked"?: boolean;
        /**
          * Is it disabled
         */
        "disabled"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        "onFwChange"?: (event: CustomEvent<any>) => void;
        /**
          * The type of control to display. The default type is text.
         */
        "size"?: "small" | "medium" | "large";
    }
    interface IntrinsicElements {
        "fw-button": FwButton;
        "fw-checkbox": FwCheckbox;
        "fw-icon": FwIcon;
        "fw-input": FwInput;
        "fw-label": FwLabel;
        "fw-radio": FwRadio;
        "fw-radio-group": FwRadioGroup;
        "fw-select": FwSelect;
        "fw-select-option": FwSelectOption;
        "fw-spinner": FwSpinner;
        "fw-tab": FwTab;
        "fw-tabs": FwTabs;
        "fw-tag": FwTag;
        "fw-textarea": FwTextarea;
        "fw-timepicker": FwTimepicker;
        "fw-toggle": FwToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fw-button": LocalJSX.FwButton & JSXBase.HTMLAttributes<HTMLFwButtonElement>;
            "fw-checkbox": LocalJSX.FwCheckbox & JSXBase.HTMLAttributes<HTMLFwCheckboxElement>;
            "fw-icon": LocalJSX.FwIcon & JSXBase.HTMLAttributes<HTMLFwIconElement>;
            "fw-input": LocalJSX.FwInput & JSXBase.HTMLAttributes<HTMLFwInputElement>;
            "fw-label": LocalJSX.FwLabel & JSXBase.HTMLAttributes<HTMLFwLabelElement>;
            "fw-radio": LocalJSX.FwRadio & JSXBase.HTMLAttributes<HTMLFwRadioElement>;
            "fw-radio-group": LocalJSX.FwRadioGroup & JSXBase.HTMLAttributes<HTMLFwRadioGroupElement>;
            "fw-select": LocalJSX.FwSelect & JSXBase.HTMLAttributes<HTMLFwSelectElement>;
            "fw-select-option": LocalJSX.FwSelectOption & JSXBase.HTMLAttributes<HTMLFwSelectOptionElement>;
            "fw-spinner": LocalJSX.FwSpinner & JSXBase.HTMLAttributes<HTMLFwSpinnerElement>;
            "fw-tab": LocalJSX.FwTab & JSXBase.HTMLAttributes<HTMLFwTabElement>;
            "fw-tabs": LocalJSX.FwTabs & JSXBase.HTMLAttributes<HTMLFwTabsElement>;
            "fw-tag": LocalJSX.FwTag & JSXBase.HTMLAttributes<HTMLFwTagElement>;
            "fw-textarea": LocalJSX.FwTextarea & JSXBase.HTMLAttributes<HTMLFwTextareaElement>;
            "fw-timepicker": LocalJSX.FwTimepicker & JSXBase.HTMLAttributes<HTMLFwTimepickerElement>;
            "fw-toggle": LocalJSX.FwToggle & JSXBase.HTMLAttributes<HTMLFwToggleElement>;
        }
    }
}
