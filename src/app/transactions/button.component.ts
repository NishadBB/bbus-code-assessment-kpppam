import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bb-button',
  template: `
      <button class="mt-3" (click)="sort()">sort</button>
  `,
})
export class ButtonComponent {
  @Output() sortList: EventEmitter<boolean> = new EventEmitter();

  sort() {
    this.sortList.emit(true);
  }
}
