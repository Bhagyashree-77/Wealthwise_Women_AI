import { useState, useEffect } from 'react';
import { FinancialGoal, GoalProgress } from '@/lib/types/goals';
import { fetchGoals, fetchGoalProgress } from '@/lib/services/goals';

export function useGoals() {
  const [goals, setGoals] = useState<FinancialGoal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadGoals() {
      try {
        setLoading(true);
        const data = await fetchGoals();
        setGoals(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load goals'));
      } finally {
        setLoading(false);
      }
    }

    loadGoals();
  }, []);

  return { goals, loading, error };
}

export function useGoalProgress(goalId: string) {
  const [progress, setProgress] = useState<GoalProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProgress() {
      try {
        setLoading(true);
        const data = await fetchGoalProgress(goalId);
        setProgress(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load goal progress'));
      } finally {
        setLoading(false);
      }
    }

    if (goalId) {
      loadProgress();
    }
  }, [goalId]);

  return { progress, loading, error };
}
