import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionItem } from './interfaces';
/**
 * -- NOTES --
 * This assessment assumed you understand Observables and RXJS
 * If you are uncomfortable with Observables, inform your facilitator.
 */

@Injectable()
export class TransactionsListService {
  /**
   * @description
   * get a list of transactions using RXJS
   * subscribe to this function to retrieve your transactions
   * @returns a list of transactions through an Observable
   */
  public getTransactions(): Observable<TransactionItem[]> {
    return new Observable((observer) => {
      observer.next(this.transactions);
      observer.complete();
    });
  }

  /**
   * @description
   * mock data of listed transactions.
   * this is private, you must use getTransactions
   */
  private transactions: TransactionItem[] = [
    {
      id: '111',
      name: 'Starbucks',
      date: '2021-03-09T03:30:49.126Z',
      balance: '10.00',
      currency: 'USD',
      category: {
        id: 'aaa',
        name: 'Food',
        icon: 'food',
      },
    },
    {
      id: '222',
      name: 'Backbase B.V.',
      date: '2021-03-09T03:30:49.126Z',
      balance: '20.00',
      currency: 'USD',
    },
    {
      id: '333',
      name: 'John White',
      date: '2021-03-09T03:30:49.126Z',
      balance: '5.00',
      currency: 'USD',
    },
    {
      id: '444',
      name: 'Bank 12',
      date: '2021-03-09T03:30:49.126Z',
      balance: '20.00',
      currency: 'USD',
      category: {
        id: 'aaa',
        name: 'Food',
        icon: 'food',
      },
    },
    {
      id: '555',
      name: 'Elderberry',
      date: '2021-03-09T03:30:49.126Z',
      balance: '20.00',
      currency: 'USD',
    },
  ];
}
