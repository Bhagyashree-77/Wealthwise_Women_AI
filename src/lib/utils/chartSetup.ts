import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Manage chart instances for hot reloading
let chartInstances: ChartJS[] = [];

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    chartInstances.forEach((instance) => instance.destroy());
    chartInstances = [];
  });
}

export function registerChartInstance(instance: ChartJS) {
  chartInstances.push(instance);
}

// Helper function for default options
export function getDefaultChartOptions(overrides = {}) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: { color: '#666' },
      },
      y: {
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: { color: '#666' },
      },
    },
    ...overrides,
  };
}
