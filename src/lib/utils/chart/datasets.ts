import { ChartDataset } from 'chart.js';
import { CONFIG } from '@/lib/constants/config';

interface CreateDatasetOptions {
  label: string;
  data: number[];
  isPrimary?: boolean;
  fill?: boolean;
  tension?: number;
}

export const createChartDataset = ({
  label,
  data,
  isPrimary = true,
  fill = true,
  tension = 0.3
}: CreateDatasetOptions): ChartDataset<'line', number[]> => {
  const color = isPrimary ? CONFIG.CHART_DEFAULTS.COLORS.PRIMARY : CONFIG.CHART_DEFAULTS.COLORS.SECONDARY;
  
  return {
    label,
    data,
    borderColor: color,
    backgroundColor: `${color}20`,
    borderWidth: 2,
    fill,
    tension,
    pointBackgroundColor: color,
    pointBorderColor: 'white',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 3
  };
};
