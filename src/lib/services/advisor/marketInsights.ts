import { MarketInsight } from '@/lib/types/advisor';

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
