export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: GoalCategory;
  priority: GoalPriority;
  monthlyContribution: number;
  progress: number;
  status: GoalStatus;
  projectedCompletion: string;
  recommendations: GoalRecommendation[];
}

export type GoalCategory = 
  | 'emergency_fund'
  | 'retirement'
  | 'investment'
  | 'education'
  | 'home'
  | 'debt'
  | 'travel'
  | 'other';

export type GoalPriority = 'high' | 'medium' | 'low';
export type GoalStatus = 'on_track' | 'at_risk' | 'behind' | 'completed';

export interface GoalRecommendation {
  id: string;
  type: 'increase_contribution' | 'adjust_timeline' | 'reduce_expenses' | 'investment_change';
  description: string;
  impact: number;
  difficulty: 'easy' | 'medium' | 'hard';
  actionable: boolean;
}

export interface GoalProgress {
  goalId: string;
  date: string;
  amount: number;
  type: 'contribution' | 'market_gains' | 'withdrawal';
}
