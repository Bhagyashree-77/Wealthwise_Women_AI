import { Asset } from './finance';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  attachments?: {
    type: 'chart' | 'metric' | 'recommendation';
    data: any;
  }[];
}

export interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  category: 'investment' | 'planning' | 'education' | 'general';
}

export interface ChatContext {
  portfolioValue?: number;
  riskTolerance?: 'low' | 'medium' | 'high';
  investmentGoals?: string[];
  marketConditions?: {
    trend: 'bullish' | 'bearish' | 'neutral';
    volatility: 'low' | 'medium' | 'high';
  };
}

export interface FinancialRecommendation {
  id: string;
  title: string;
  description: string;
  type: string;
  category: 'action_required' | 'opportunity' | 'warning' | 'insight';
  priority: 'high' | 'medium' | 'low';
  impact: string;
  confidence: number;
  actionSteps: string[];
  relatedAssets?: Asset[];
}
