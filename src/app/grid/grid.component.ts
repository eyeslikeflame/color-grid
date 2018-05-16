import { Component, OnInit, Input } from '@angular/core';
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
    this.appService.emptyCells[event.i] = Object.assign(new Cell(), event.cell);
  }

  /**
   * Сокращенная запись рандома
   * @returns {number}
   */


  ngOnInit() {
    if (this.type === 'colors') {
      this.appService.generateColorsGrid(15);
    } else if (this.type === 'empty') {
      this.appService.generateEmptyGrid(15);
    }
  }
}


