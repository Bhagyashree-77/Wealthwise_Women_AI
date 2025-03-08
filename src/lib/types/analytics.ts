export interface PerformanceMetrics {
  returns: {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
    allTime: number;
  };
  risk: {
    volatility: number;
    sharpeRatio: number;
    maxDrawdown: number;
    beta: number;
  };
  predictions: {
    nextMonthReturn: number;
    confidence: number;
    riskLevel: 'low' | 'medium' | 'high';
    recommendedActions: RecommendedAction[];
  };
}

export interface RecommendedAction {
  id: string;
  type: 'buy' | 'sell' | 'hold' | 'rebalance';
  asset: string;
  reason: string;
  potentialImpact: number;
  confidence: number;
}

export interface PerformanceHistory {
  date: string;
  value: number;
  benchmark: number;
}
