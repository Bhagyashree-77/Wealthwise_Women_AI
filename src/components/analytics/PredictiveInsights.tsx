import React from 'react';
import { Card } from '@/components/ui/Card';
import { PerformanceMetrics } from '@/lib/types/analytics';
import { ArrowUp, ArrowDown, MinusIcon } from 'lucide-react';
import { formatPercentage } from '@/lib/utils';

interface PredictiveInsightsProps {
  predictions: PerformanceMetrics['predictions'];
}

export function PredictiveInsights({ predictions }: PredictiveInsightsProps) {
  return (
    <Card title="AI-Powered Insights" description="ML-based predictions and recommendations">
      <div className="mt-4 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Predicted Monthly Return</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              {formatPercentage(predictions.nextMonthReturn)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-500">Confidence Level</p>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {formatPercentage(predictions.confidence)}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900">Recommended Actions</h4>
          <div className="mt-2 space-y-3">
            {predictions.recommendedActions.map((action) => (
              <div
                key={action.id}
                className="rounded-lg border border-gray-200 p-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {action.type === 'buy' && (
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    )}
                    {action.type === 'sell' && (
                      <ArrowDown className="h-4 w-4 text-red-500" />
                    )}
                    {action.type === 'hold' && (
                      <MinusIcon className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="font-medium text-gray-900">{action.asset}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    Impact: {formatPercentage(action.potentialImpact)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{action.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
