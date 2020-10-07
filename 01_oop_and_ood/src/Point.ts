export class Point {
  x: number;
  y: number;

  constructor(pointX?: number, pointY?: number);
  constructor(pointX: number = 0, pointY: number = 0) {
    this.x = pointX;
    this.y = pointY;
  }

  private toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;

  public distance(a?: Point | number, b?: number): number | string {
    if (a instanceof Point) {
      return new Point(this.x, this.y).distance(a.x, a.y);
    }
		const x1 = a || 0;
		const y1 = b || 0;
    return Number(Math.sqrt(Math.pow(x1 - this.x, 2) + Math.pow(y1 - this.y, 2)).toFixed(3));
  }
}
