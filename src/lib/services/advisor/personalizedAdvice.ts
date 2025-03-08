import { FinancialAdvice } from '@/lib/types/advisor';

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
