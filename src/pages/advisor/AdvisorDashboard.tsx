import React from 'react';
import { Card } from '@/components/ui/Card';
import { AdviceCard } from '@/components/advisor/AdviceCard';
import { MarketInsightCard } from '@/components/advisor/MarketInsightCard';
import { useFinancialAdvice, useMarketInsights } from '@/lib/hooks/useAdvisor';
import { Brain, TrendingUp } from 'lucide-react';

export function AdvisorDashboard() {
  const { advice, loading: adviceLoading, error: adviceError } = useFinancialAdvice();
  const { insights, loading: insightsLoading, error: insightsError } = useMarketInsights();

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <Brain className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">AI Financial Advisor</h2>
              <p className="text-purple-100">Personalized insights and recommendations</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Market Insights</h2>
              <p className="text-blue-100">Real-time market analysis and trends</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Personalized Recommendations
          </h2>
          {adviceLoading ? (
            <div className="animate-pulse space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-100 rounded-lg" />
              ))}
            </div>
          ) : adviceError ? (
            <Card className="bg-red-50 border-red-200">
              <div className="text-red-700">
                Failed to load recommendations. Please try again later.
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {advice.map((item) => (
                <AdviceCard key={item.id} advice={item} />
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Market Analysis
          </h2>
          {insightsLoading ? (
            <div className="animate-pulse space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-100 rounded-lg" />
              ))}
            </div>
          ) : insightsError ? (
            <Card className="bg-red-50 border-red-200">
              <div className="text-red-700">
                Failed to load market insights. Please try again later.
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {insights.map((insight) => (
                <MarketInsightCard key={insight.id} insight={insight} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
