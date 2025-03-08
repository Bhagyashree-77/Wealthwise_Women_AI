import React from 'react';
import { GoalCard } from './GoalCard';
import { useGoals } from '@/lib/hooks/useGoals';
import { Card } from '@/components/ui/Card';

export function GoalList() {
  const { goals, loading, error } = useGoals();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="bg-red-50 border-red-200">
        <div className="text-red-700">
          Failed to load financial goals. Please try again later.
        </div>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
}
