import { ChartOptions } from 'chart.js';
import { formatCurrency } from '../formatters';

export const createChartOptions = (title?: string): ChartOptions => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: !!title,
      text: title,
      font: { size: 16, weight: 'bold' }
    },
    legend: {
      position: 'top',
      labels: { usePointStyle: true }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      padding: 10,
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || '';
          const value = formatCurrency(context.parsed.y);
          return `${label}: ${value}`;
        }
      }
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { maxRotation: 45 }
    },
    y: {
      grid: { color: 'rgba(0, 0, 0, 0.1)' },
      ticks: {
        callback: (value) => formatCurrency(Number(value)),
        padding: 8
      }
    }
  },
  interaction: {
    intersect: false,
    mode: 'index'
  },
  elements: {
    line: { tension: 0.3 },
    point: { radius: 2, hoverRadius: 4 }
  }
});
