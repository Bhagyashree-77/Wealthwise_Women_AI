import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-500">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-gray-900">{user?.fullName}</span>
            <span className="text-xs text-gray-500">{user?.email}</span>
          </div>
          {user?.profileImage ? (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user.profileImage}
              alt={user.fullName}
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-lg font-medium text-purple-600">
                {user?.fullName?.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
