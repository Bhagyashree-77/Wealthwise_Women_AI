import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from '@/components/ui/Card';
import { useGoalProgress } from '@/lib/hooks/useGoals';
import { formatCurrency } from '@/lib/utils';
import '@/lib/utils/chartSetup';

interface GoalProgressProps {
  goalId: string;
}

export function GoalProgress({ goalId }: GoalProgressProps) {
  const { progress, loading, error } = useGoalProgress(goalId);

  if (loading) {
    return (
      <div className="animate-pulse h-[300px] bg-gray-100 rounded-lg" />
    );
  }

  if (error) {
    return (
      <Card className="bg-red-50 border-red-200">
        <div className="text-red-700">
          Failed to load goal progress. Please try again later.
        </div>
      </Card>
    );
  }

  const chartData = {
    labels: progress.map(p => new Date(p.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Progress',
        data: progress.map(p => p.amount),
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `Amount: ${formatCurrency(context.raw)}`;
          }
        }
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false
        }
      },
      y: {
        display: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          callback: (value: any) => formatCurrency(value)
        }
      }
    }
  };

  return (
    <Card title="Goal Progress" description="Monthly contributions and growth">
      <div className="mt-4 h-[300px]">
        <Line data={chartData} options={options} />
      </div>
    </Card>
  );
}
