import { useState, useEffect } from 'react';
import { FinancialRecommendation } from '@/lib/types/chat';
import { getFinancialRecommendations } from '@/lib/services/chat';

export function useFinancialRecommendations() {
  const [recommendations, setRecommendations] = useState<FinancialRecommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadRecommendations() {
      try {
        setLoading(true);
        const data = await getFinancialRecommendations();
        setRecommendations(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load recommendations'));
      } finally {
        setLoading(false);
      }
    }

    loadRecommendations();
  }, []);

  return { recommendations, loading, error };
}
