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

// Register required Chart.js components
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

// Set global defaults
ChartJS.defaults.font.family = 'Inter, system-ui, sans-serif';
ChartJS.defaults.color = '#4B5563';
ChartJS.defaults.borderColor = '#E5E7EB';

// Clean up on hot reload
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    ChartJS.instances.forEach(instance => instance.destroy());
  });
}

export { ChartJS };
