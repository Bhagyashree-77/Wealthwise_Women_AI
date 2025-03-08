import React from 'react';
import { Card } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, AlertTriangle, Activity } from 'lucide-react';
import { PerformanceMetrics as Metrics } from '@/lib/types/analytics';
import { formatPercentage } from '@/lib/utils';

interface PerformanceMetricsProps {
  metrics: Metrics;
}

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-purple-100 rounded-full">
            <TrendingUp className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Monthly Return</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatPercentage(metrics.returns.monthly)}
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 rounded-full">
            <Activity className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Volatility</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatPercentage(metrics.risk.volatility)}
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-green-100 rounded-full">
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Sharpe Ratio</p>
            <p className="text-2xl font-semibold text-gray-900">
              {metrics.risk.sharpeRatio.toFixed(2)}
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-red-100 rounded-full">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Max Drawdown</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatPercentage(metrics.risk.maxDrawdown)}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
