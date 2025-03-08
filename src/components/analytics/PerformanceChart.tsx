import React, { useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { LineChart } from '@/components/charts/LineChart';
import type { PerformanceHistory } from '@/lib/types/analytics';

interface PerformanceChartProps {
  data: PerformanceHistory[];
  loading?: boolean;
}

export function PerformanceChart({ data, loading }: PerformanceChartProps) {
  const chartData = useMemo(() => ({
    labels: data.map(d => new Date(d.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Portfolio Value',
        data: data.map(d => d.value),
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        tension: 0.3,
        fill: true
      },
      {
        label: 'Benchmark',
        data: data.map(d => d.benchmark),
        borderColor: 'rgb(107, 114, 128)',
        backgroundColor: 'rgba(107, 114, 128, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  }), [data]);

  return (
    <Card title="Portfolio Performance" description="Historical performance vs benchmark">
      <div className="mt-4">
        <LineChart 
          data={chartData}
          loading={loading}
          height={400}
        />
      </div>
    </Card>
  );
}
