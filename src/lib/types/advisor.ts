export interface FinancialAdvice {
  id: string;
  type: 'investment' | 'savings' | 'risk' | 'market' | 'general';
  title: string;
  content: string;
  confidence: number;
  timestamp: string;
  source?: string;
  relatedMetrics?: {
    key: string;
    value: string;
    trend: 'up' | 'down' | 'stable';
  }[];
}

export interface MarketInsight {
  id: string;
  title: string;
  summary: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  impact: 'high' | 'medium' | 'low';
  timestamp: string;
  category: 'stocks' | 'bonds' | 'crypto' | 'commodities' | 'general';
  confidence: number;
}

export interface RiskAssessment {
  overallScore: number;
  categories: {
    name: string;
    score: number;
    recommendations: string[];
  }[];
  lastUpdated: string;
}

export interface TradingSignal {
  asset: string;
  action: 'buy' | 'sell' | 'hold';
  strength: number;
  reasoning: string;
  timestamp: string;
  validUntil: string;
}
