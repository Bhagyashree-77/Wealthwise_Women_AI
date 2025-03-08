import { FinancialGoal, GoalProgress } from '@/lib/types/goals';

export async function fetchGoals(): Promise<FinancialGoal[]> {
  await new Promise(resolve => setTimeout(resolve, 800));

  return [
    {
      id: '1',
      name: 'Emergency Fund',
      targetAmount: 25000,
      currentAmount: 15000,
      deadline: '2024-12-31',
      category: 'emergency_fund',
      priority: 'high',
      monthlyContribution: 500,
      progress: 60,
      status: 'on_track',
      projectedCompletion: '2024-10-15',
      recommendations: [
        {
          id: '1',
          type: 'increase_contribution',
          description: 'Increase monthly contribution by $100 to reach goal 2 months earlier',
          impact: 15,
          difficulty: 'medium',
          actionable: true
        }
      ]
    },
    {
      id: '2',
      name: 'Retirement',
      targetAmount: 1000000,
      currentAmount: 250000,
      deadline: '2045-12-31',
      category: 'retirement',
      priority: 'high',
      monthlyContribution: 2000,
      progress: 25,
      status: 'on_track',
      projectedCompletion: '2045-06-30',
      recommendations: [
        {
          id: '2',
          type: 'investment_change',
          description: 'Consider increasing equity allocation to boost long-term returns',
          impact: 25,
          difficulty: 'medium',
          actionable: true
        }
      ]
    },
    {
      id: '3',
      name: 'Down Payment',
      targetAmount: 100000,
      currentAmount: 35000,
      deadline: '2025-06-30',
      category: 'home',
      priority: 'medium',
      monthlyContribution: 1500,
      progress: 35,
      status: 'at_risk',
      projectedCompletion: '2025-09-30',
      recommendations: [
        {
          id: '3',
          type: 'reduce_expenses',
          description: 'Review monthly expenses to find additional savings',
          impact: 20,
          difficulty: 'hard',
          actionable: true
        }
      ]
    }
  ];
}

export async function fetchGoalProgress(goalId: string): Promise<GoalProgress[]> {
  await new Promise(resolve => setTimeout(resolve, 600));

  const progress: GoalProgress[] = [];
  const startDate = new Date('2023-01-01');
  
  for (let i = 0; i < 12; i++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    
    progress.push({
      goalId,
      date: date.toISOString().split('T')[0],
      amount: Math.random() * 1000 + 500,
      type: Math.random() > 0.3 ? 'contribution' : 'market_gains'
    });
  }

  return progress;
}
