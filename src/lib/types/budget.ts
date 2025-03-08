export interface Budget {
  monthlyIncome: number;
  expenses: number;
  savings: number;
  categories: BudgetCategory[];
}

export interface BudgetCategory {
  name: string;
  amount: number;
  limit: number;
}
