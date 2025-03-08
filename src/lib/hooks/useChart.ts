import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';

export function useChart() {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return chartRef;
}
