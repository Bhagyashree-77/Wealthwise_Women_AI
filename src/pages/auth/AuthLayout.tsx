import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              WealthWise Women
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Your journey to financial empowerment starts here
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
