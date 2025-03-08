import { useState, useEffect } from 'react';
import { Stock } from '@/lib/types/finance';
import { fetchStockData } from '@/lib/services/stocks';

export function useStocks() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadStocks() {
      try {
        setLoading(true);
        const data = await fetchStockData();
        if (mounted) {
          setStocks(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to load stocks'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadStocks();
    const interval = setInterval(loadStocks, 5000); // Update every 5 seconds

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return { stocks, loading, error };
}
