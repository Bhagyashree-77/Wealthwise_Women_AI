import { useState, useEffect } from 'react';
import { Budget } from '@/lib/types/budget';
import { fetchBudgetData } from '@/lib/services/budget';

export function useBudget() {
  const [budget, setBudget] = useState<Budget>({
    monthlyIncome: 150000, // Updated to realistic Indian salary
    expenses: 95000,
    savings: 55000,
    categories: [
      { name: 'Housing & Rent', amount: 45000, limit: 50000 },
      { name: 'Groceries & Food', amount: 15000, limit: 20000 },
      { name: 'Transportation', amount: 8000, limit: 10000 },
      { name: 'Utilities & Bills', amount: 12000, limit: 15000 },
      { name: 'Entertainment', amount: 5000, limit: 8000 },
      { name: 'Healthcare', amount: 5000, limit: 10000 },
      { name: 'Education', amount: 5000, limit: 10000 }
    ]
  });

  useEffect(() => {
    async function loadBudget() {
      try {
        const data = await fetchBudgetData();
        setBudget(data);
      } catch (error) {
        console.error('Failed to load budget data:', error);
      }
    }

    loadBudget();
  }, []);

  return budget;
}
