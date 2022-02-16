export interface TransactionItem {
  id: string;
  name: string;
  date: string;
  balance: string;
  currency: string;
  category?: TransactionCategory;
}

export interface TransactionCategory {
  id: string;
  name: string;
  icon: string;
}
