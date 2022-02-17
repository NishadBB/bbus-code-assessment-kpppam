import { Component, OnInit } from '@angular/core';
import { TransactionItem } from './interfaces';
import { TransactionsListService } from './transactions.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

/**
 * -- NOTES --
 * interfaces can be found in app/transactions/interfaces.ts
 * api service can be found in app/transactions/transactions.service.ts
 * 
 * -- TASK --
 * 1. get a list of transactions by adding logic in getTransactions function in transaction api service.
 * 
 * 2. by DEFAULT, sort the list of transactions by 'name' 'ascending' (alphabetical order)
 *    this must be done before the initial render

 * 3. allow the ability to toggle between 'ascending' and 'descending' order.
 *    on sort button, update the DOM.
 * 
 * 4. only call the transaction api once.
 *    do not call the api service again on toggle. - for medior nice to have 
 * 
 * 5. Format the date like 'Jun 15, Tuesday'
 * 
 * 6. Display items in a two columns box with an image (you can use the provided
 *    icon class as placeholder), transaction name, amount and date shown in the image
 * 
 * 7. (Optional: Accessibility): allow the ability to tab through each transaction item in the DOM.
 *    "is it accessible without a mouse?"
 *
 * -- HELPFUL TIPS --
 * Alphabetical Sort is done. It can be found with 'sortAlphabetically'
 * example: ${your_array}.sort(this.sortAlphabetically)
 * 
 * Other sorting examples: https://www.w3schools.com/jsref/jsref_sort.asp
 */

@Component({
  selector: 'bb-transactions',
  template: `
    <div class="codebox">
      <!-- create the component for transaction list -->
      <bb-transactions-list [transactions]="transactions$ | async"></bb-transactions-list>
      <!-- create the component for sort button -->
      <bb-button (sortList)="sortOrder()"></bb-button>
    </div>
  `,
  styleUrls: ['./transactions.styles.scss'],
  providers: [TransactionsListService],
})
export class TransactionsComponent implements OnInit {
  constructor(private readonly service: TransactionsListService) {}

  isAscending$ = new BehaviorSubject<boolean>(true);
  transactions$: Observable<TransactionItem[]> = combineLatest([
    this.getTransactions(),
    this.isAscending$,
  ]).pipe(
    map(([transactions, isAscending]) => {
      const items: TransactionItem[] = Object.assign([], transactions);
      return isAscending ? items : items.reverse();
    })
  );

  ngOnInit(): void {}

  private getTransactions(): Observable<TransactionItem[]> {
    return this.service
      .getTransactions()
      .pipe(map((transactions) => transactions.sort(this.sortAlphabetically)));
  }

  public sortOrder() {
    this.isAscending$.next(!this.isAscending$.value);
  }

  private sortAlphabetically(a: TransactionItem, b: TransactionItem) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
}
