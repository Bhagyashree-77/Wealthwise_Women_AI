import { useState, useEffect } from 'react';
import {
  FinancialAdvice,
  MarketInsight,
  RiskAssessment,
  TradingSignal
} from '@/lib/types/advisor';
import {
  getPersonalizedAdvice,
  getMarketInsights,
  getRiskAssessment,
  getTradingSignals
} from '@/lib/services/advisor';

export function useFinancialAdvice() {
  const [advice, setAdvice] = useState<FinancialAdvice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadAdvice() {
      try {
        setLoading(true);
        const data = await getPersonalizedAdvice();
        setAdvice(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load advice'));
      } finally {
        setLoading(false);
      }
    }

    loadAdvice();
  }, []);

  return { advice, loading, error };
}

export function useMarketInsights() {
  const [insights, setInsights] = useState<MarketInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadInsights() {
      try {
        setLoading(true);
        const data = await getMarketInsights();
        setInsights(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load insights'));
      } finally {
        setLoading(false);
      }
    }

    loadInsights();
    // Refresh every 5 minutes
    const interval = setInterval(loadInsights, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return { insights, loading, error };
}

export function useRiskAssessment() {
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadAssessment() {
      try {
        setLoading(true);
        const data = await getRiskAssessment();
        setAssessment(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load risk assessment'));
      } finally {
        setLoading(false);
      }
    }

    loadAssessment();
  }, []);

  return { assessment, loading, error };
}

export function useTradingSignals() {
  const [signals, setSignals] = useState<TradingSignal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadSignals() {
      try {
        setLoading(true);
        const data = await getTradingSignals();
        setSignals(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load trading signals'));
      } finally {
        setLoading(false);
      }
    }

    loadSignals();
    // Refresh every minute
    const interval = setInterval(loadSignals, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return { signals, loading, error };
}
