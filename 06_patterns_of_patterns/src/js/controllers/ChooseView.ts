import { NumberCalculate } from "./NumberCalculate";
import { RangeCalculate } from "./RangeCalculate";

export class ChooseView {
  alert: HTMLElement;
  container: HTMLElement;
  constructor() {
    this.alert = document.getElementById("alert");
    this.container = document.getElementById("container");

    this.alert.addEventListener("click", (event: any) => {
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
