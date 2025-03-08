import React from 'react';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { useBudget } from '@/lib/hooks/useBudget';
import { formatCurrency } from '@/lib/utils';

interface BudgetOverviewProps {
  monthlyIncome: number;
  expenses: number;
  savings: number;
}

export function BudgetOverview({ monthlyIncome, expenses, savings }: BudgetOverviewProps) {
  return (
    <Card title="Monthly Overview">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Monthly Income</span>
            <span className="text-sm font-bold">{formatCurrency(monthlyIncome)}</span>
          </div>
          <Progress value={(expenses / monthlyIncome) * 100} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-sm text-gray-500">Total Expenses</span>
            <p className="text-lg font-semibold text-red-600">
              {formatCurrency(expenses)}
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-gray-500">Total Savings</span>
            <p className="text-lg font-semibold text-green-600">
              {formatCurrency(savings)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
