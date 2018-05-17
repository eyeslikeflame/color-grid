/**
 * Конструктор одной клетки с цветом
 */
export class Cell {
  constructor(r = 255, g = 255, b = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb = `rgb(${r}, ${g}, ${b})`;
  }

  r: number;
  g: number;
  b: number;
  rgb: string;
}
