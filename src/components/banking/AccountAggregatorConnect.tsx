import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { initiateAAConsent, checkConsentStatus } from '@/lib/services/accountAggregator';

interface AccountAggregatorConnectProps {
  onSuccess: (consentId: string) => void;
  onError: (error: Error) => void;
}

export function AccountAggregatorConnect({ onSuccess, onError }: AccountAggregatorConnectProps) {
  const [status, setStatus] = useState<'idle' | 'initiating' | 'waiting' | 'success' | 'error'>('idle');
  const [consentId, setConsentId] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      setStatus('initiating');
      const response = await initiateAAConsent('user-id'); // Replace with actual user ID
      setConsentId(response.consentId);
      setStatus('waiting');

      // Poll for consent status
      const pollInterval = setInterval(async () => {
        const statusResponse = await checkConsentStatus(response.consentId);
        if (statusResponse.status === 'APPROVED') {
          clearInterval(pollInterval);
          setStatus('success');
          onSuccess(response.consentId);
        } else if (statusResponse.status === 'REJECTED') {
          clearInterval(pollInterval);
          setStatus('error');
          onError(new Error('Consent rejected by user'));
        }
      }, 5000);

    } catch (error) {
      setStatus('error');
      onError(error instanceof Error ? error : new Error('Failed to connect account'));
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-purple-100 rounded-lg">
          <Shield className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Connect Your Bank Account</h2>
          <p className="text-sm text-gray-600">
            Securely connect your bank account using RBI approved Account Aggregator
          </p>
        </div>
      </div>

      {status === 'idle' && (
        <Button onClick={handleConnect} className="w-full">
          Connect via Account Aggregator
        </Button>
      )}

      {status === 'initiating' && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Initiating connection...</p>
        </div>
      )}

      {status === 'waiting' && (
        <div className="text-center py-4">
          <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            Please approve the consent request in your bank's AA app
          </p>
          <p className="text-xs text-gray-500 mt-2">Consent ID: {consentId}</p>
        </div>
      )}

      {status === 'success' && (
        <div className="text-center py-4">
          <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Account successfully connected!</p>
        </div>
      )}

      {status === 'error' && (
        <div className="text-center py-4">
          <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <p className="text-sm text-red-600">Failed to connect account. Please try again.</p>
          <Button onClick={handleConnect} variant="outline" className="mt-4">
            Retry Connection
          </Button>
        </div>
      )}
    </Card>
  );
}
