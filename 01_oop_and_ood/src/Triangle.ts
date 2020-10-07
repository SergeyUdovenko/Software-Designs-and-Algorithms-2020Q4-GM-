import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
  private v1: Point;
  private v2: Point;
  private v3: Point;

  private d1: number = 0;
  private d2: number = 0;
  private d3: number = 0;

  constructor(point1: Point, point2: Point, point3: Point) {
    super([point1, point2, point3]);

    this.v1 = point1;
    this.v2 = point2;
		this.v3 = point3;

    this.d1 = this.v3.distance(this.v1);
    this.d2 = this.v1.distance(this.v2);
    this.d3 = this.v2.distance(this.v3);
    
    console.log(this.d1, this.d2, this.d3)
  }

  toString(): string {
    let { v1, v2, v3 } = this;
    return `Triangle[v1=(${v1.x},${v1.y}),v2=(${v2.x},${v2.y}),v3=(${v3.x},${v3.y})]`;
  }

  getType(): string {
    let { d1, d2, d3 } = this;
    return (
      (d1 === d2 && d1 === d3 && "equilateral triangle") ||
      ((d1 === d2 || d1 === d3 || d2 === d3) && "isosceles triangle") ||
      "scalene triangle"
    );
  }
}
