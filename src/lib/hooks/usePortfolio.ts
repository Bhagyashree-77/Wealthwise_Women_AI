import { useState, useEffect } from 'react';
import { Portfolio } from '@/lib/types/finance';
import { fetchPortfolioData } from '@/lib/services/portfolio';

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadPortfolio() {
      try {
        setLoading(true);
        const data = await fetchPortfolioData();
        setPortfolio(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load portfolio'));
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
    // Refresh every 5 minutes
    const interval = setInterval(loadPortfolio, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return { portfolio, loading, error };
}
