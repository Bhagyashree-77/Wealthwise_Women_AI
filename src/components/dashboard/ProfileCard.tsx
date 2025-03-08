import React from 'react';
import { Card } from '@/components/ui/Card';
import { User, Briefcase, IndianRupee, Shield } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { formatCurrency } from '@/lib/utils';

export function ProfileCard() {
  const { user } = useAuth();

  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        {user?.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.fullName}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-2xl font-medium text-purple-600">
              {user?.fullName?.charAt(0)}
            </span>
          </div>
        )}
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{user?.fullName}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{user?.occupation}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IndianRupee className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {formatCurrency(user?.monthlyIncome || 0)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{user?.age} years</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600 capitalize">
                {user?.riskTolerance} Risk
              </span>
            </div>
          </div>

          {user?.panNumber && (
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">PAN Number</p>
                  <p className="text-sm font-medium">{user.panNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Aadhar Number</p>
                  <p className="text-sm font-medium">
                    {user.aadharNumber?.replace(/(\d{4})/g, '$1 ').trim()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
