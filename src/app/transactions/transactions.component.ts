import { Component, OnInit } from '@angular/core';
import { TransactionItem } from './interfaces';
import { TransactionsListService } from './transactions.service';
// import { Observable, BehaviorSubject, combineLatest } from "rxjs";
// import { map, switchMap } from "rxjs/operators";

/**
 * -- NOTES --
 * This assessment can be done 100% in this component.
 * interfaces can be found in app/transactions/interfaces.ts
 * api service can be found in app/transactions/transactions.service.ts
 * 
 * -- TASK --
 * 1. get a list of transactions by calling the transaction api service
 * 
 * 2. by DEFAULT, sort the list of transactions by 'name' 'ascending' (alphabetical order)
 *    this must be done before the initial render

 * 3. allow the ability to toggle between 'ascending' and 'descending' order.
 *    on sort button, update the DOM.
 * 
 * 4. only call the transaction api once.
 *    do not call the api service again on toggle.
 * 
 * 5. Format the date to 'Jun 15, Tuesday'
 * 
 * 6. Display items in a two columns box with an image (you can use the provided
 *    icon class as placeholder), transaction name, amount and date
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
      <!-- write your component here for transactions. -->
      <bb-transactions-list></bb-transactions-list>
      <bb-button></bb-button>
    </div>
  `,
  styleUrls: ['./transactions.styles.scss'],
  providers: [TransactionsListService],
})
export class TransactionsComponent implements OnInit {
  constructor(private readonly service: TransactionsListService) {}

  ngOnInit(): void {}

  public sortOrder() {}

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
