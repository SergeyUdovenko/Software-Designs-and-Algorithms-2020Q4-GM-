import { Point } from "./Point";

export abstract class Shape {
  protected constructor(points: Point[]);
  protected constructor(points: Point[], color: string, filled: boolean);

  protected constructor(points: Point[], color?: string, filled?: boolean) {
    this.color = color || "green";
    this.filled = typeof filled === "boolean" ? filled : true;
    this.points = points;
    if (this.points?.length < 3) {
      throw new Error(
        "Make sure that the `Shape` has at least 3 points (2 points is just a line)"
      );
    }
  }

  getPerimeter(): number {
    const perimeter = this.points.reduce(
      (prev: number, sum: Point, currIndex: number): number => {
        let dist;
        if (currIndex === 0) {
          dist = sum.distance(this.points[this.points.length - 1]);
        } else {
          dist = sum.distance(this.points[currIndex - 1]);
        }
        return prev + dist;
      },
      0
    );
    return perimeter;
  }

  protected color: string;

  protected filled: boolean;

  protected points: Point[];

  toString(): string {
    return `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: ${this.points.join(", ").toString()}.`;
  }
}
