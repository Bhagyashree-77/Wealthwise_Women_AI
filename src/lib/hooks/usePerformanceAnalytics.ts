import { useState, useEffect } from 'react';
import { PerformanceMetrics, PerformanceHistory } from '@/lib/types/analytics';
import { fetchPerformanceMetrics, fetchPerformanceHistory } from '@/lib/services/analytics';

export function usePerformanceAnalytics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [history, setHistory] = useState<PerformanceHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadAnalytics() {
      try {
        setLoading(true);
        const [metricsData, historyData] = await Promise.all([
          fetchPerformanceMetrics(),
          fetchPerformanceHistory()
        ]);
        setMetrics(metricsData);
        setHistory(historyData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load analytics'));
      } finally {
        setLoading(false);
      }
    }

    loadAnalytics();
  }, []);

  return { metrics, history, loading, error };
}
