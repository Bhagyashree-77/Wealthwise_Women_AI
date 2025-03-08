import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { ArrowUpDown } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { Input } from '@/components/ui/Input';

interface ExpenseCategory {
  name: string;
  limit: number;
  amount: number;
}

interface ExpenseTrackerProps {
  monthlyIncome: number;
}

export function ExpenseTracker({ monthlyIncome }: ExpenseTrackerProps) {
  const [categories, setCategories] = useState<ExpenseCategory[]>([
    { name: 'Housing', limit: 0.3, amount: 0 },
    { name: 'Food', limit: 0.2, amount: 0 },
    { name: 'Transportation', limit: 0.1, amount: 0 },
    { name: 'Utilities', limit: 0.1, amount: 0 },
    { name: 'Entertainment', limit: 0.1, amount: 0 },
    { name: 'Healthcare', limit: 0.1, amount: 0 },
    { name: 'Other', limit: 0.1, amount: 0 },
  ]);

  useEffect(() => {
    if (monthlyIncome) {
      const newCategories = categories.map(category => ({
        ...category,
        limit: category.limit,
        amount: category.amount,
      }));
      setCategories(newCategories);
    }
  }, [monthlyIncome]);

  const handleAmountChange = (index: number, value: number) => {
    const newCategories = [...categories];
    newCategories[index].amount = value;
    setCategories(newCategories);
  };

  return (
    <Card title="Expense Categories" description="Track your spending by category">
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={category.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{category.name}</span>
              <span>{formatCurrency(category.amount)} / {formatCurrency(category.limit * monthlyIncome)}</span>
            </div>
            <Input
              type="number"
              placeholder="Enter amount"
              value={category.amount || ''}
              onChange={(e) => handleAmountChange(index, Number(e.target.value))}
            />
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  category.amount > category.limit * monthlyIncome ? 'bg-red-500' : 'bg-green-500'
                }`}
                style={{ width: `${Math.min((category.amount / (category.limit * monthlyIncome)) * 100, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
