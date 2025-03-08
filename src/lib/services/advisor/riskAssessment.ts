import { RiskAssessment } from '@/lib/types/advisor';

export async function getRiskAssessment(): Promise<RiskAssessment> {
  await new Promise(resolve => setTimeout(resolve, 700));

  return {
    overallScore: 75,
    categories: [
      {
        name: 'Diversification',
        score: 85,
        recommendations: [
          'Consider adding international exposure',
          'Maintain current sector balance'
        ]
      },
      {
        name: 'Volatility Management',
        score: 70,
        recommendations: [
          'Review bond allocation',
          'Consider defensive stocks'
        ]
      }
    ],
    lastUpdated: new Date().toISOString()
  };
}
