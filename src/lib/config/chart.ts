import { ChartOptions } from 'chart.js';
import { formatCurrency } from '@/lib/utils';

export const defaultChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'category',
      grid: {
        display: false
      },
      ticks: {
        maxRotation: 45
      }
    },
    y: {
      type: 'linear',
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      ticks: {
        callback: (value) => formatCurrency(Number(value))
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || '';
          const value = formatCurrency(context.parsed.y);
          return `${label}: ${value}`;
        }
      }
    }
  },
  interaction: {
    intersect: false,
    mode: 'index'
  }
};
