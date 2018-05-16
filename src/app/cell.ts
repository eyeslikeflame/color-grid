/**
 * Конструктор одной клетки
 */
export class Cell {
  constructor(r = 255, g = 255, b = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.string = `rgb(${r}, ${g}, ${b})`;
  }
  r: number;
  g: number;
  b: number;
  string: string;
}
