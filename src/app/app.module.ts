import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DraggableDirective } from './drag-n-drop/draggable.directive';
import { DroppableDirective } from './drag-n-drop/droppable.directive';
import { AppService } from './app.service';
import { JsonInputComponent } from './json-input/json-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DraggableDirective,
    DroppableDirective,
    JsonInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
