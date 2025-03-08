import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function BankingCallback() {
  const navigate = useNavigate();

  const handleContinue = () => {
      navigate('/onboarding/complete');
  };

  return (
    <Card className="p-6 text-center">
        <>
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Bank Account Connected!</h2>
          <p className="text-gray-600 mb-6">
            Your bank account has been successfully connected.
          </p>
        </>

      <Button onClick={handleContinue} className="w-full">
         Continue
      </Button>
    </Card>
  );
}
