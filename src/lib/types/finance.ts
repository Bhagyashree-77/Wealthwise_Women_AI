export interface Portfolio {
  totalValue: number;
  dailyChange: number;
  dailyChangePercentage: number;
  assets: Asset[];
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  quantity: number;
  currentPrice: number;
  value: number;
  change24h: number;
  changePercentage24h: number;
  allocation: number;
  type: 'stock' | 'crypto' | 'bond' | 'cash';
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  category: 'savings' | 'investment' | 'debt' | 'retirement';
  progress: number;
}

export interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}
