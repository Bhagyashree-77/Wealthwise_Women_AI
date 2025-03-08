import { FinancialAdvice, MarketInsight, RiskAssessment, TradingSignal } from '@/lib/types/advisor';

export async function getPersonalizedAdvice(): Promise<FinancialAdvice[]> {
  await new Promise(resolve => setTimeout(resolve, 800));

  return [
    {
      id: '1',
      type: 'investment',
      title: 'Portfolio Rebalancing Opportunity',
      content: 'Based on recent market movements, your technology sector allocation has drifted above target. Consider rebalancing to maintain your risk profile.',
      confidence: 0.89,
      timestamp: new Date().toISOString(),
      relatedMetrics: [
        { key: 'Tech Allocation', value: '35%', trend: 'up' },
        { key: 'Target Allocation', value: '30%', trend: 'stable' }
      ]
    },
    {
      id: '2',
      type: 'risk',
      title: 'Market Volatility Alert',
      content: "Increased market volatility detected. Your portfolio's defensive positions are helping minimize impact.",
      confidence: 0.92,
      timestamp: new Date().toISOString(),
      relatedMetrics: [
        { key: 'Portfolio Beta', value: '0.85', trend: 'down' },
        { key: 'Volatility Index', value: '25.5', trend: 'up' }
      ]
    }
  ];
}

export async function getMarketInsights(): Promise<MarketInsight[]> {
  await new Promise(resolve => setTimeout(resolve, 600));

  return [
    {
      id: '1',
      title: 'Fed Policy Impact Analysis',
      summary: 'Recent Federal Reserve statements suggest a potential shift in monetary policy. Our analysis indicates a 70% probability of market-positive outcomes.',
      sentiment: 'positive',
      impact: 'high',
      timestamp: new Date().toISOString(),
      category: 'general',
      confidence: 0.85
    },
    {
      id: '2',
      title: 'Tech Sector Momentum',
      summary: 'AI-driven companies showing strong momentum with sustainable growth metrics.',
      sentiment: 'positive',
      impact: 'medium',
      timestamp: new Date().toISOString(),
      category: 'stocks',
      confidence: 0.78
    }
  ];
}

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

export async function getTradingSignals(): Promise<TradingSignal[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      asset: 'S&P 500 ETF',
      action: 'buy',
      strength: 0.75,
      reasoning: 'Technical indicators suggest oversold conditions with positive momentum divergence',
      timestamp: new Date().toISOString(),
      validUntil: new Date(Date.now() + 86400000).toISOString()
    }
  ];
}
