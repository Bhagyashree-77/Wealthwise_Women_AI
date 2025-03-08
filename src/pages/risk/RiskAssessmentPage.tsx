import React from 'react';
import { Card } from '@/components/ui/Card';
import { Shield, AlertTriangle } from 'lucide-react';
import { useRiskAssessment } from '@/lib/hooks/useAdvisor';

export function RiskAssessmentPage() {
  const { assessment, loading, error } = useRiskAssessment();

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
          Failed to load risk assessment. Please try again later.
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-red-500 to-red-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Risk Assessment</h1>
            <p className="text-red-100">Portfolio risk analysis and optimization</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Overall Risk Score</h2>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-gray-900">
                {assessment?.overallScore}
              </div>
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </Card>

        {assessment?.categories.map((category) => (
          <Card key={category.name}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-900">
                  {category.score}
                </div>
                <AlertTriangle className={`h-6 w-6 ${
                  category.score >= 70 ? 'text-green-500' :
                  category.score >= 50 ? 'text-yellow-500' : 'text-red-500'
                }`} />
              </div>
              <div className="space-y-2">
                {category.recommendations.map((rec, index) => (
                  <p key={index} className="text-sm text-gray-600">{rec}</p>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
