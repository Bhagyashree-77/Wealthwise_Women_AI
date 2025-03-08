import React from 'react';
import { Card } from '@/components/ui/Card';
import { MarketInsight } from '@/lib/types/advisor';
import { TrendingUp, TrendingDown, Minus, Newspaper } from 'lucide-react';

interface MarketInsightCardProps {
  insight: MarketInsight;
}

export function MarketInsightCard({ insight }: MarketInsightCardProps) {
  const sentimentColors = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50'
  };

  const impactColors = {
    high: 'text-red-600',
    medium: 'text-yellow-600',
    low: 'text-green-600'
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Newspaper className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
              <p className="text-sm text-gray-500">
                {new Date(insight.timestamp).toLocaleDateString()}
              </p>
            </div>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${sentimentColors[insight.sentiment]}`}>
            {insight.sentiment.charAt(0).toUpperCase() + insight.sentiment.slice(1)}
          </span>
        </div>

        <p className="text-gray-700">{insight.summary}</p>

        <div className="flex items-center justify-between text-sm">
          <span className={`font-medium ${impactColors[insight.impact]}`}>
            {insight.impact.toUpperCase()} IMPACT
          </span>
          <span className="text-gray-500">
            Confidence: {(insight.confidence * 100).toFixed(0)}%
          </span>
        </div>
      </div>
    </Card>
  );
}
