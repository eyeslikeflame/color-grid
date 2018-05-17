import { Injectable } from '@angular/core';
import { Cell } from './cell';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  colorCells;
  emptyCells;
  jsonEmpty = '';
  constructor() { }

  /**
   * Создает сетку с пустыми клетками
   * @param {number} capacity
   */
  public generateEmptyGrid(capacity: number) {
    this.emptyCells = new Array(capacity);
  }

  /**
   * Создает сетку с рандомными цветами
   * @param {number} capacity
   */
  public generateColorsGrid(capacity: number) {
    this.colorCells = [];
    let r, g, b;
    for (let i = 0; i < capacity; i++) {
      [r, g, b] = [this.random(), this.random(), this.random()];
      this.colorCells[i] = new Cell(r, g, b);
    }
  }

  public jsonGrid() {
    this.jsonEmpty = JSON.stringify(this.emptyCells);
    return this.jsonEmpty;
  }

  private random() {
    return Math.floor(Math.random() * 255 + 1);
  }
}
