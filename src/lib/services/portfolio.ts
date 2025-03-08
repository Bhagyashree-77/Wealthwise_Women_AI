import { Portfolio } from '@/lib/types/finance';

// Simulated portfolio data - In production, this would fetch from an API
export async function fetchPortfolioData(): Promise<Portfolio> {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    totalValue: 125000,
    dailyChange: 1250,
    dailyChangePercentage: 1.01,
    assets: [
      {
        id: '1',
        name: 'Apple Inc.',
        symbol: 'AAPL',
        quantity: 50,
        currentPrice: 175.25,
        value: 8762.50,
        change24h: 125.50,
        changePercentage24h: 1.45,
        allocation: 35,
        type: 'stock'
      },
      {
        id: '2',
        name: 'US Treasury Bond',
        symbol: 'USTB',
        quantity: 100,
        currentPrice: 98.50,
        value: 9850,
        change24h: -25.50,
        changePercentage24h: -0.25,
        allocation: 25,
        type: 'bond'
      },
      {
        id: '3',
        name: 'Cash',
        symbol: 'USD',
        quantity: 15000,
        currentPrice: 1,
        value: 15000,
        change24h: 0,
        changePercentage24h: 0,
        allocation: 40,
        type: 'cash'
      }
    ]
  };
}
