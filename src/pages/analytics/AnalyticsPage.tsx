import React from 'react';
import { Card } from '@/components/ui/Card';
import { BarChart, TrendingUp } from 'lucide-react';
import { PerformanceChart } from '@/components/analytics/PerformanceChart';
import { PerformanceMetrics } from '@/components/analytics/PerformanceMetrics';
import { PredictiveInsights } from '@/components/analytics/PredictiveInsights';
import { usePerformanceAnalytics } from '@/lib/hooks/usePerformanceAnalytics';

export function AnalyticsPage() {
  const { metrics, history, loading, error } = usePerformanceAnalytics();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="bg-red-50 border-red-200">
        <div className="text-red-700">
          Failed to load analytics data. Please try again later.
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <BarChart className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Market Analytics</h1>
            <p className="text-indigo-100">Advanced market analysis and predictions</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6">
        <PerformanceMetrics metrics={metrics} />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PerformanceChart data={history} />
          </div>
          <div>
            <PredictiveInsights predictions={metrics.predictions} />
          </div>
        </div>
      </div>
    </div>
  );
}
