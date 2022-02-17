import { Component, Input, OnInit } from '@angular/core';
import { TransactionItem } from './interfaces';

@Component({
  selector: 'bb-transactions-list',
  template: `
    <!-- write your DOM here. remove all DOM here. -->
    <!-- Your HTML goes here -->
    <div class="transactions-list-container">
      <div *ngFor="let item of transactions; let i = index" class="container" [attr.tabIndex]="0">
        <div class="avatar icon">
        </div>
        <div class="details">
          <div><b>Name</b>: {{ item.name }}</div>
          <div><b>Amount</b>: {{ item.balance | currency }}</div>
          <div><b>Date</b>: {{ item.date | date: 'MMM d, EEEE' }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./transactions-list.scss'],
})
export class TransactionsListComponent {
  @Input('transactions') transactions: TransactionItem[];
  constructor() {}
}
