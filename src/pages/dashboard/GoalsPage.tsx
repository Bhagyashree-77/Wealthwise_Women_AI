import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Target } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';

interface Goal {
  name: string;
  targetAmount: number;
  monthlyContribution: number;
}

export function GoalsPage() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [goals, setGoals] = useState<{ [key: string]: Goal }>({
    home: { name: 'Home Down Payment', targetAmount: 1000000, monthlyContribution: 10000 },
    education: { name: 'Child Education', targetAmount: 500000, monthlyContribution: 5000 },
    retirement: { name: 'Retirement Fund', targetAmount: 2000000, monthlyContribution: 15000 },
    stocks: { name: 'Stock Investments', targetAmount: 100000, monthlyContribution: 2000 },
    gold: { name: 'Gold Investments', targetAmount: 50000, monthlyContribution: 1000 },
  });

  const handleGoalSelection = (goalName: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalName) ? prev.filter((name) => name !== goalName) : [...prev, goalName]
    );
  };

  const handleInputChange = (goalName: string, field: string, value: number) => {
    setGoals((prev) => ({
      ...prev,
      [goalName]: {
        ...prev[goalName],
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Financial Goals</h1>
            <p className="text-purple-100">Set and track your financial objectives</p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold mb-4">Select Your Goals</h2>
        <div className="space-y-4">
          {Object.entries(goals).map(([goalName, goal]) => (
            <div key={goalName} className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  checked={selectedGoals.includes(goalName)}
                  onChange={() => handleGoalSelection(goalName)}
                />
                {goal.name}
              </label>
            </div>
          ))}
        </div>
      </Card>

      {selectedGoals.length > 0 && (
        <Card>
          <h2 className="text-xl font-semibold mb-4">Customize Your Goals</h2>
          <div className="space-y-4">
            {selectedGoals.map((goalName) => (
              <div key={goalName} className="space-y-2">
                <h3 className="text-lg font-medium">{goals[goalName].name}</h3>
                <Input
                  label="Target Amount"
                  type="number"
                  value={goals[goalName].targetAmount}
                  onChange={(e) => handleInputChange(goalName, 'targetAmount', Number(e.target.value))}
                />
                <Input
                  label="Monthly Contribution"
                  type="number"
                  value={goals[goalName].monthlyContribution}
                  onChange={(e) => handleInputChange(goalName, 'monthlyContribution', Number(e.target.value))}
                />
              </div>
            ))}
          </div>
        </Card>
      )}

      {selectedGoals.length > 0 && (
        <Card>
          <h2 className="text-xl font-semibold mb-4">Investment Plans</h2>
          <div className="space-y-4">
            {selectedGoals.map((goalName) => (
              <div key={goalName} className="space-y-2">
                <h3 className="text-lg font-medium">{goals[goalName].name}</h3>
                {goalName === 'stocks' && (
                  <>
                    <p>Consider opening a Demat account with BSE-listed brokers.</p>
                    <p>Research and invest in diversified stocks or ETFs.</p>
                  </>
                )}
                {goalName === 'gold' && (
                  <>
                    <p>Explore options for investing in gold, such as gold bonds or ETFs.</p>
                  </>
                )}
                {goalName === 'home' && (
                  <>
                    <p>Compare home loan interest rates from various banks.</p>
                    <p>Plan for down payment and EMI options.</p>
                  </>
                )}
                {goalName === 'education' && (
                  <>
                    <p>Consider education loans or savings plans for your child's future.</p>
                  </>
                )}
                {goalName === 'retirement' && (
                  <>
                    <p>Invest in long-term retirement plans with tax benefits.</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
