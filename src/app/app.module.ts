import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransactionsComponent } from './transactions/transactions.component';
import { ButtonComponent } from './transactions/button.component';
import { TransactionsListComponent } from './transactions/transactions-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionsListComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
