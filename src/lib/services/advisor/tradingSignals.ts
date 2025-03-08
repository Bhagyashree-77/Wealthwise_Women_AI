import { TradingSignal } from '@/lib/types/advisor';

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
