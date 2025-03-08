import { PerformanceMetrics, PerformanceHistory } from '@/lib/types/analytics';

export async function fetchPerformanceMetrics(): Promise<PerformanceMetrics> {
  // Simulating API call to ML service
  await new Promise(resolve => setTimeout(resolve, 800));

  return {
    returns: {
      daily: 1.2,
      weekly: 3.5,
      monthly: 8.2,
      yearly: 15.7,
      allTime: 45.3
    },
    risk: {
      volatility: 12.5,
      sharpeRatio: 1.8,
      maxDrawdown: -15.3,
      beta: 0.85
    },
    predictions: {
      nextMonthReturn: 2.5,
      confidence: 0.85,
      riskLevel: 'medium',
      recommendedActions: [
        {
          id: '1',
          type: 'rebalance',
          asset: 'Technology Sector',
          reason: 'Overweight position relative to target allocation',
          potentialImpact: 1.5,
          confidence: 0.88
        },
        {
          id: '2',
          type: 'buy',
          asset: 'Value Stocks',
          reason: 'Undervalued with strong fundamentals',
          potentialImpact: 2.1,
          confidence: 0.82
        }
      ]
    }
  };
}

export async function fetchPerformanceHistory(): Promise<PerformanceHistory[]> {
  await new Promise(resolve => setTimeout(resolve, 600));

  const history: PerformanceHistory[] = [];
  const startDate = new Date('2023-01-01');
  let portfolioValue = 100000;
  let benchmarkValue = 100000;

  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    // Simulate daily changes
    portfolioValue *= (1 + (Math.random() * 0.02 - 0.01));
    benchmarkValue *= (1 + (Math.random() * 0.018 - 0.009));

    history.push({
      date: date.toISOString().split('T')[0],
      value: portfolioValue,
      benchmark: benchmarkValue
    });
  }

  return history;
}
