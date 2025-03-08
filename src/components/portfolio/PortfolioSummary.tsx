import React from 'react';
import { Card } from '@/components/ui/Card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface PortfolioSummaryProps {
  totalValue: number;
  dailyChange: number;
  dailyChangePercentage: number;
}

export function PortfolioSummary({ 
  totalValue, 
  dailyChange, 
  dailyChangePercentage 
}: PortfolioSummaryProps) {
  const isPositive = dailyChange >= 0;

  return (
    <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-purple-100">Total Portfolio Value</h3>
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-bold">{formatCurrency(totalValue)}</span>
          <div className={`flex items-center ${isPositive ? 'text-green-300' : 'text-red-300'}`}>
            {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            <span className="text-sm font-medium">
              {isPositive ? '+' : ''}{formatCurrency(dailyChange)} ({dailyChangePercentage.toFixed(2)}%)
            </span>
          </div>
        </div>
        <p className="text-sm text-purple-100">Daily Change</p>
      </div>
    </Card>
  );
}
