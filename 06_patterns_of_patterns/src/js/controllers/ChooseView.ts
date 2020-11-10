import { NumberCalculate } from "./NumberCalculate";
import { RangeCalculate } from "./RangeCalculate";

export class ChooseView {
  radio-panel: HTMLElement;
  container: HTMLElement;
  constructor() {
    this.radio-panel = document.getElementById("radio-panel");
    this.container = document.getElementById("container");

    this.radio-panel.addEventListener("click", (event: any) => {
      const target = <HTMLElement>event.target;
      if (!this.handler[target.id]) return;
      this.container.innerHTML = "";
      this.handler[target.id]();
    });
  }

  handler: { [key: string]: Function } = {
    "number-button": () => {
      new NumberCalculate();
    },
    "range-button": () => {
      new RangeCalculate();
    },
  };
}
