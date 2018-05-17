import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(private el: ElementRef) {
  }
  // передача объекта с цветом
  @Input() appDraggable;
  // вывод через ивент mouseup
  @Output() drop = new EventEmitter();
  clonedEl;

  /**
   * Клонирует элемент с цветом, чтобы пользователь мог видеть какой цвет он тянет
   */
  private clone(): void {
    this.clonedEl = this.el.nativeElement.cloneNode(true);
    this.clonedEl.classList.add('clone');
    this.clonedEl.style.cssText += 'position: fixed';

    this.clonedEl.style.left = '-9999px';
    this.clonedEl.style.top = '-9999px';

    document.onmouseup = (event: any) => {
      if (event.target.classList.contains('droppable')) {
        this.drop.emit({
          cell: this.appDraggable,
          i: event.target.parentNode.getAttribute('i')
        });
      }
      this.removeClone();
    };

   document.body.appendChild(this.clonedEl);
  }

  /**
   * Убирает клон и связанные с ним ивенты
   */
  private removeClone(): void {
    this.clonedEl.remove();
    document.body.classList.remove('dragging');
    document.onmouseup = () => {};
    document.onmousemove = () => {};
  }

  /**
   * Начало драга
   */
  @HostListener('mousedown') startDrag() {
    this.clone();
    document.body.classList.add('dragging');
    document.onmousemove = (event) => {
      // позиционирование клона относительно курсора
      this.clonedEl.style.left = event.pageX - this.clonedEl.offsetWidth  / 2 + 'px';
      this.clonedEl.style.top = event.pageY - this.clonedEl.offsetHeight  / 2 + 'px';
    };
  }
}
