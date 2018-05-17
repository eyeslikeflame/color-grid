import { Component, OnInit, Input, NgModule } from '@angular/core';
import { AppService } from '../app.service';
import { Cell } from '../cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() type;
  constructor(public appService: AppService) {
  }

  onDrop(event) {
    this.blendColor(event);
  }

  /**
   * Смешивает цвета, если в клетке уже присутствует любой цвет
   * Если нет, то просто добавляет его в сетку
   * @param event
   */
  private blendColor(event) {
    const empty = this.appService.emptyCells[event.i];
    let rgbBlend = [];
    if (!empty) {
      this.appService.emptyCells[event.i] = Object.assign(new Cell(), event.cell);
    } else {
      rgbBlend = [
        Math.floor( (empty.r + event.cell.r) / 2 ),
        Math.floor( (empty.g + event.cell.g) / 2 ),
        Math.floor( (empty.b + event.cell.b) / 2 )
      ];
      this.appService.emptyCells[event.i] = new Cell(...rgbBlend);
    }
  }

  ngOnInit() {
    /**
     * Генерирует две сетки ( одна с цветами, другая - без ), если правильно переданы типы в компоненте
     */
    if (this.type === 'colors') {
      this.appService.generateColorsGrid(15);
    } else if (this.type === 'empty') {
      this.appService.generateEmptyGrid(15);
    } else {
      throw new Error('grid type is incorrect');
    }
  }
}


