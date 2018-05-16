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

  // клонирование элемента с цветом
  clone() {
    this.clonedEl = this.el.nativeElement.cloneNode(true);
    this.clonedEl.classList.add('clone');
    this.clonedEl.style.cssText += 'position: fixed';

    // this.clonedEl.style.left = event.pageX - this.clonedEl.offsetWidth  / 2 + 'px';
    // this.clonedEl.style.top = event.pageY - this.clonedEl.offsetHeight  / 2 + 'px';

    document.onmouseup = (event: any) => {
      if (event.target.classList.contains('droppable')) {
        this.drop.emit({
          cell: this.appDraggable,
          i: event.target.getAttribute('i')
        });
      }
      this.removeClone();
    };

   document.body.appendChild(this.clonedEl);
  }

  private removeClone() {
    this.clonedEl.remove();
    document.onmouseup = () => {};
    document.onmousemove = () => {};
  }

  @HostListener('mousedown') startDrag() {
    this.clone();
    document.onmousemove = (event) => {
      this.clonedEl.style.left = event.pageX - this.clonedEl.offsetWidth  / 2 + 'px';
      this.clonedEl.style.top = event.pageY - this.clonedEl.offsetHeight  / 2 + 'px';
    };
  }
}
