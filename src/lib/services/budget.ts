import { Budget } from '@/lib/types/budget';

export async function fetchBudgetData(): Promise<Budget> {
  // Simulated API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    monthlyIncome: 50000,
    expenses: 35000,
    savings: 15000,
    categories: [
      { name: 'Housing', amount: 15000, limit: 20000 },
      { name: 'Transportation', amount: 5000, limit: 7000 },
      { name: 'Food', amount: 8000, limit: 10000 },
      { name: 'Utilities', amount: 4000, limit: 5000 },
      { name: 'Entertainment', amount: 3000, limit: 4000 }
    ]
  };
}
