import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { calculateSIP } from '@/lib/utils/financial';
import { formatCurrency, formatLargeNumber } from '@/lib/utils';

export function SIPCalculator() {
  const [amount, setAmount] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const result = calculateSIP(amount, years, rate);

  return (
    <Card title="SIP Calculator" description="Plan your systematic investments">
      <div className="space-y-4">
        <Input
          label="Monthly SIP Amount (₹)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Input
          label="Time Period (Years)"
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
        <Input
          label="Expected Return (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />

        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Investment</span>
              <span className="font-semibold">{formatLargeNumber(result.invested)}</span>
            </div>
            <div className="flex justify-between">
              <span>Expected Returns</span>
              <span className="font-semibold text-green-600">
                {formatLargeNumber(result.returns)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Value</span>
              <span className="font-semibold text-purple-600">
                {formatLargeNumber(result.totalValue)}
              </span>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>* SIP returns are subject to market risks. Past performance is not indicative of future returns.</p>
          <p>* This calculator provides an estimate based on constant returns. Actual returns may vary.</p>
        </div>
      </div>
    </Card>
  );
}
