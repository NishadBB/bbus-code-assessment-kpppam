import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-button',
  template: `
      <button class="mt-3" (click)="sortOrder()">sort</button>
  `,
  styleUrls: ['./transactions.styles.scss'],
})
export class ButtonComponent {}
