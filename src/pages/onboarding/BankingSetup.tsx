import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Ban as Bank, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function BankingSetup() {
  const navigate = useNavigate();

  const handleComplete = async () => {
    navigate('/onboarding/complete');
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <Bank className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Connect Your Bank Account</h1>
            <p className="text-purple-100">
              Securely connect your bank account.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Secure</h2>
              <p className="text-sm text-gray-600">
                Your data is protected by security
              </p>
            </div>
          </div>
        </Card>

        <Button onClick={handleComplete} className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}
