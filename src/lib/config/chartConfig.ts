import { ChartOptions } from 'chart.js';
import { formatCurrency } from '@/lib/utils/formatters';
import { CONFIG } from '@/lib/constants/config';

export const defaultChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
    },
    y: {
      display: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      ticks: {
        callback: (value) => formatCurrency(Number(value)),
      },
    },
  },
};

export const createDataset = (label: string, data: number[], isPrimary = true) => ({
  label,
  data,
  borderColor: isPrimary ? CONFIG.CHART_DEFAULTS.COLORS.PRIMARY : CONFIG.CHART_DEFAULTS.COLORS.SECONDARY,
  backgroundColor: `${isPrimary ? CONFIG.CHART_DEFAULTS.COLORS.PRIMARY : CONFIG.CHART_DEFAULTS.COLORS.SECONDARY}20`,
  tension: 0.3,
  fill: true,
});
