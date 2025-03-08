import React from 'react';
import { Card } from '@/components/ui/Card';
import { useStocks } from '@/lib/hooks/useStocks';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';

export function InvestmentOpportunities() {
  const { stocks, loading, error } = useStocks();

  const investmentTypes = [
    {
      name: 'Equity Mutual Funds',
      description: 'Long-term wealth creation through diversified equity exposure',
      minAmount: 500,
      expectedReturn: '12-15%',
      risk: 'Moderate to High'
    },
    {
      name: 'PPF (Public Provident Fund)',
      description: 'Government backed tax-saving investment with guaranteed returns',
      minAmount: 500,
      expectedReturn: '7.1%',
      risk: 'Low'
    },
    {
      name: 'National Pension System (NPS)',
      description: 'Long-term retirement savings with tax benefits',
      minAmount: 1000,
      expectedReturn: '8-10%',
      risk: 'Moderate'
    },
    {
      name: 'Fixed Deposits',
      description: 'Secure investment with guaranteed returns',
      minAmount: 10000,
      expectedReturn: '5.5-6.5%',
      risk: 'Low'
    }
  ];

  return (
    <Card title="Investment Options" description="Popular investment choices in India">
      <div className="space-y-4">
        {investmentTypes.map((investment) => (
          <div
            key={investment.name}
            className="p-4 border rounded-lg hover:border-purple-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-lg">{investment.name}</h3>
                <p className="text-sm text-gray-600">{investment.description}</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                {investment.risk}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <span className="text-gray-600">Min. Investment</span>
                <p className="font-medium">₹{investment.minAmount}</p>
              </div>
              <div>
                <span className="text-gray-600">Expected Returns</span>
                <p className="font-medium">{investment.expectedReturn}</p>
              </div>
            </div>
            <Button size="sm" className="w-full mt-4">
              Start Investing
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>* All investments are subject to market risks. Please read scheme related documents carefully.</p>
        <p>* Past performance is not indicative of future returns.</p>
        <p>* Consult your financial advisor before making investment decisions.</p>
      </div>
    </Card>
  );
}
