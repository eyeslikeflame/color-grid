import { Injectable } from '@angular/core';
import { Cell } from './cell';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  colorCells;
  emptyCells;
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

    for (let i = 0; i < capacity; i++) {
      this.colorCells[i] = new Cell(this.random(), this.random(), this.random());
    }
  }

  private random() {
    return Math.floor(Math.random() * 255 + 1);
  }
}
