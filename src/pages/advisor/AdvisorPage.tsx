import React from 'react';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { RecommendationCard } from '@/components/recommendations/RecommendationCard';
import { useFinancialRecommendations } from '@/lib/hooks/useFinancialRecommendations';
import { Card } from '@/components/ui/Card';
import { MessageSquare } from 'lucide-react';

export function AdvisorPage() {
  const { recommendations, loading, error } = useFinancialRecommendations();

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Financial Advisor</h1>
            <p className="text-purple-100">Get personalized financial guidance and recommendations</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <ChatWindow />
        </div>
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Personalized Recommendations
          </h2>
          {loading ? (
            <div className="flex items-center justify-center h-48">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
            </div>
          ) : error ? (
            <Card className="bg-red-50 border-red-200">
              <div className="text-red-700">
                Failed to load recommendations. Please try again later.
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {recommendations?.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.id}
                  recommendation={recommendation}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
