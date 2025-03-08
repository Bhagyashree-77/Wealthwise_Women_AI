import { Stock } from '@/lib/types/finance';

export async function fetchStockData(): Promise<Stock[]> {
  // Simulated API call
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 178.25,
      change: 1.5,
      volume: 52000000
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 335.50,
      change: 0.8,
      volume: 28000000
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 142.75,
      change: -0.5,
      volume: 18000000
    }
  ];
}
