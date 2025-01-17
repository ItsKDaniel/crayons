import { r as registerInstance, i as h, j as getElement } from './index-44c267ce.js';

const pillCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--fw-pill-border:none;--fw-pill-border-radius:16px;--fw-pill-padding:5px 12px 5px 8px;--fw-pill-color:#475867;--fw-pill-background-color:#ebeff3}.pill{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--fw-pill-color);background-color:var(--fw-pill-background-color);padding:var(--fw-pill-padding);border:var(--fw-pill-border);border-radius:var(--fw-pill-border-radius);font-weight:600;font-size:12px;line-height:20px}.pill ::slotted(*){height:14px;width:14px}.pill .pill-icon{height:14px;width:14px;-webkit-margin-end:6px;margin-inline-end:6px}.pill ::slotted(fw-icon){--fw-icon-size:14px;--fw-icon-color:#475867}.pill--blue{background-color:#e5f2fd;color:#2c5cc5}.pill--blue ::slotted(fw-icon){--fw-icon-color:#2c5cc5}.pill--red{background-color:#ffecf0;color:#d72d30}.pill--red ::slotted(fw-icon){--fw-icon-color:#d72d30}.pill--green{background-color:#e0f5f1;color:#00795b}.pill--green ::slotted(fw-icon){--fw-icon-color:#00795b}.pill--yellow{background-color:#fef1e1;color:#e86f25}.pill--yellow ::slotted(fw-icon){--fw-icon-color:#e86f25}.pill--grey{background-color:#ebeff3;color:#475867}.pill--grey ::slotted(fw-icon){--fw-icon-color:#475867}";

let Pill = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.handleSlotChange();
  }
  getPillClass(color) {
    return color ? `pill pill--${color.toLowerCase()}` : 'pill';
  }
  handleSlotChange() {
    this.hasIcon = !!this.el.querySelector('[slot="icon"');
  }
  render() {
    return (h("span", { class: this.getPillClass(this.color) }, this.hasIcon && (h("div", { class: 'pill-icon' }, h("slot", { name: 'icon' }))), h("slot", { onSlotchange: () => this.handleSlotChange() })));
  }
  get el() { return getElement(this); }
};
Pill.style = pillCss;

export { Pill as fw_pill };
