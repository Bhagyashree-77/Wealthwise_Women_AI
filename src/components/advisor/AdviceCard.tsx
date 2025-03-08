import React from 'react';
import { Card } from '@/components/ui/Card';
import { FinancialAdvice } from '@/lib/types/advisor';
import { TrendingUp, TrendingDown, Minus, AlertTriangle, LineChart, PiggyBank, Shield } from 'lucide-react';

interface AdviceCardProps {
  advice: FinancialAdvice;
}

export function AdviceCard({ advice }: AdviceCardProps) {
  const typeIcons = {
    investment: <LineChart className="h-5 w-5 text-purple-500" />,
    savings: <PiggyBank className="h-5 w-5 text-green-500" />,
    risk: <Shield className="h-5 w-5 text-red-500" />,
    market: <TrendingUp className="h-5 w-5 text-blue-500" />,
    general: <AlertTriangle className="h-5 w-5 text-yellow-500" />
  };

  const trendIcons = {
    up: <TrendingUp className="h-4 w-4 text-green-500" />,
    down: <TrendingDown className="h-4 w-4 text-red-500" />,
    stable: <Minus className="h-4 w-4 text-gray-500" />
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {typeIcons[advice.type]}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{advice.title}</h3>
              <p className="text-sm text-gray-500">{new Date(advice.timestamp).toLocaleDateString()}</p>
            </div>
          </div>
          <span className="text-sm font-medium text-purple-600">
            {(advice.confidence * 100).toFixed(0)}% confidence
          </span>
        </div>

        <p className="text-gray-700">{advice.content}</p>

        {advice.relatedMetrics && (
          <div className="grid grid-cols-2 gap-4">
            {advice.relatedMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">{metric.key}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{metric.value}</span>
                  {trendIcons[metric.trend]}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
