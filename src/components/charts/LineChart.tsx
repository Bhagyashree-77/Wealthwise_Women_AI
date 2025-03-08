import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { defaultChartOptions } from '@/lib/config/chart';
import '@/lib/utils/chart/setup';

interface LineChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
  height?: number;
  loading?: boolean;
}

export function LineChart({ data, options, height = 400, loading }: LineChartProps) {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current?.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  if (loading) {
    return (
      <div style={{ height }} className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div style={{ height }}>
      <Line
        ref={chartRef}
        data={data}
        options={{ 
          ...defaultChartOptions, 
          ...options,
          scales: {
            x: {
              type: 'category',
              grid: { display: false }
            },
            y: {
              type: 'linear',
              grid: { color: 'rgba(0, 0, 0, 0.1)' }
            }
          }
        }}
      />
    </div>
  );
}
