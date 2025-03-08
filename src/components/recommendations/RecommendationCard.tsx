import React from 'react';
import { Card } from '@/components/ui/Card';
import { FinancialRecommendation } from '@/lib/types/chat';
import { TrendingUp, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: FinancialRecommendation;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const categoryIcons = {
    action_required: <AlertTriangle className="h-5 w-5 text-red-500" />,
    opportunity: <TrendingUp className="h-5 w-5 text-green-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    insight: <Lightbulb className="h-5 w-5 text-blue-500" />,
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
  };

  return (
    <Card className="hover:shadow-md">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {categoryIcons[recommendation.category]}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {recommendation.title}
              </h3>
              <p className="text-sm text-gray-500">{recommendation.type}</p>
            </div>
          </div>
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${
            priorityColors[recommendation.priority]
          }`}>
            {recommendation.priority}
          </span>
        </div>

        <p className="text-gray-600">{recommendation.description}</p>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-900">Impact</p>
          <p className="text-sm text-gray-600">{recommendation.impact}</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-900">Action Steps</p>
          <ul className="space-y-1">
            {recommendation.actionSteps.map((step, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-sm text-gray-500">
            Confidence: {(recommendation.confidence * 100).toFixed(0)}%
          </span>
          <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
            Take Action
          </button>
        </div>
      </div>
    </Card>
  );
}
