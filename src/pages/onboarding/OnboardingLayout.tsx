import React from 'react';
import { Outlet } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function OnboardingLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Brain className="h-8 w-8 text-purple-600 mr-2" />
          <span className="text-2xl font-bold">WealthWise Women</span>
        </div>
        <div className="max-w-3xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
