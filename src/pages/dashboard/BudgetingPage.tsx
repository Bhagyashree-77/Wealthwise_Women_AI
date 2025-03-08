import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Wallet, IndianRupee } from 'lucide-react';
import { ExpenseTracker } from '@/components/budgeting/ExpenseTracker';
import { SIPCalculator } from '@/components/budgeting/SIPCalculator';
import { InvestmentOpportunities } from '@/components/budgeting/InvestmentOpportunities';
import { Input } from '@/components/ui/Input';
import { formatCurrency } from '@/lib/utils';
import { BudgetOverview } from '@/components/budgeting/BudgetOverview';

export function BudgetingPage() {
  const [monthlyIncome, setMonthlyIncome] = useState<number | null>(50000);
  const expenses = 35000;
  const savings = monthlyIncome ? monthlyIncome - expenses : 0;

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-500 to-green-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <Wallet className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Budget & Investments</h1>
            <p className="text-green-100">Track expenses and grow your wealth</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center space-x-2">
          <IndianRupee className="h-4 w-4 text-gray-400" />
          <label className="text-sm font-medium text-gray-700">Monthly Income</label>
        </div>
        <Input
          type="number"
          placeholder="Enter monthly income"
          value={monthlyIncome || ''}
          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
        />
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <BudgetOverview monthlyIncome={monthlyIncome || 0} expenses={expenses} savings={savings} />
        <ExpenseTracker monthlyIncome={monthlyIncome || 0} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SIPCalculator />
        <InvestmentOpportunities />
      </div>
    </div>
  );
}
