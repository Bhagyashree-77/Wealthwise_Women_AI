import React from 'react';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { FinancialGoal } from '@/lib/types/goals';
import { formatCurrency } from '@/lib/utils';
import { Target, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface GoalCardProps {
  goal: FinancialGoal;
  onClick?: () => void;
}

export function GoalCard({ goal, onClick }: GoalCardProps) {
  const statusColors = {
    on_track: 'text-green-600',
    at_risk: 'text-yellow-600',
    behind: 'text-red-600',
    completed: 'text-purple-600'
  };

  const statusIcons = {
    on_track: <CheckCircle className="h-5 w-5" />,
    at_risk: <AlertTriangle className="h-5 w-5" />,
    behind: <Clock className="h-5 w-5" />,
    completed: <Target className="h-5 w-5" />
  };

  return (
    <Card
      className="cursor-pointer transition-shadow hover:shadow-md"
      onClick={onClick}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{goal.name}</h3>
            <p className="text-sm text-gray-500">Target: {formatCurrency(goal.targetAmount)}</p>
          </div>
          <div className={`flex items-center ${statusColors[goal.status]}`}>
            {statusIcons[goal.status]}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium text-gray-900">
              {formatCurrency(goal.currentAmount)} of {formatCurrency(goal.targetAmount)}
            </span>
          </div>
          <Progress value={goal.progress} />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Monthly Contribution</p>
            <p className="font-medium text-gray-900">
              {formatCurrency(goal.monthlyContribution)}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Target Date</p>
            <p className="font-medium text-gray-900">
              {new Date(goal.deadline).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
