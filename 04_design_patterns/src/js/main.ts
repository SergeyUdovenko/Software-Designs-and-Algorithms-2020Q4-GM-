import { Letter, Oversized, Package } from "./parcel/index";
import {
  DoNotLeaveDecorator,
  FragileDecorator,
  ReturnReceiptDecorator,
} from "./decorators/index";
import { State, Shipment } from "./shipment";

const weightShip: { readonly [key: string]: number } = {
  letter: 15,
  package: 160,
};

const shipInfo: State = {
  toAddress: "Kharkiv",
  fromAddress: "Kiev",
  toZipCode: "95623",
  fromZipCode: "12123",
  weight: 2,
};

class MockGui {
  shipment: Shipment;
  ship: State;
  constructor(ship: State) {
    const { weight } = ship;
    this.ship = ship;

    if (weight <= weightShip.letter) {
      this.shipment = new Letter(shipInfo);
    } else if (weight <= weightShip.package) {
      this.shipment = new Package(shipInfo);
    } else {
      this.shipment = new Oversized(shipInfo);
    }
  }
  public trigger(eventType: string): void {
    if (eventType === "Fragile") {
      new FragileDecorator(this.shipment).showMessage();
    }
    if (eventType === "DoNotLeave") {
      new DoNotLeaveDecorator(this.shipment).showMessage();
    }
    if (eventType === "ReturnReceiptRequested") {
      new ReturnReceiptDecorator(this.shipment).showMessage();
    }
  }
}

class Client {
  gui: MockGui;
  constructor(gui: MockGui) {
    this.gui = gui;
    this.onShip(this.gui.shipment);
  }
  onShip(shipment: Shipment) {
    return shipment.ship(this.gui.ship);
  }
}

const g = new MockGui(shipInfo);
const cl = new Client(g);
cl.gui.trigger("Fragile");
cl.gui.trigger("DoNotLeave");
cl.gui.trigger("ReturnReceiptRequested");

