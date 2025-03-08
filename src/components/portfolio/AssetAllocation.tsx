import React from 'react';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { Asset } from '@/lib/types/finance';
import { formatCurrency } from '@/lib/utils';

interface AssetAllocationProps {
  assets: Asset[];
}

export function AssetAllocation({ assets }: AssetAllocationProps) {
  return (
    <Card title="Asset Allocation" description="Current portfolio distribution">
      <div className="space-y-4">
        {assets.map((asset) => (
          <div key={asset.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-900">{asset.name}</span>
                <span className="ml-2 text-sm text-gray-500">{formatCurrency(asset.value)}</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {asset.allocation}%
              </span>
            </div>
            <Progress value={asset.allocation} />
          </div>
        ))}
      </div>
    </Card>
  );
}
