import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input() appDroppable;

  ngOnInit() {
    this.makeInvisibleStaff();
  }

  private makeInvisibleStaff() {
    const invisibleDiv = document.createElement('div');
    invisibleDiv.style.cssText = 'width: 100%; height: 100%; position: absolute; z-index: 1;';
    invisibleDiv.classList.add('droppable');
    invisibleDiv.setAttribute('i', this.appDroppable);
    this.el.nativeElement.style.cssText += 'position: relative';
    this.el.nativeElement.appendChild(invisibleDiv);
  }
}
