import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DraggableDirective } from './drag-n-drop/draggable.directive';
import { DroppableDirective } from './drag-n-drop/droppable.directive';
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DraggableDirective,
    DroppableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
