import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  PiggyBank,
  Target,
  TrendingUp,
  GraduationCap,
  Users,
  Settings,
  LogOut,
  MessageSquare,
  Wallet,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Budgeting', href: 'budgeting', icon: Wallet },
  { name: 'Goals', href: 'goals', icon: Target },
  { name: 'Analytics', href: 'analytics', icon: TrendingUp },
  { name: 'AI Advisor', href: 'advisor', icon: MessageSquare },
  { name: 'Learning', href: 'learning', icon: GraduationCap },
  { name: 'Community', href: 'community', icon: Users },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 shrink-0 items-center border-b border-gray-200 px-6">
        <span className="text-xl font-bold text-purple-600">WealthWise Women</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
                location.pathname === `/dashboard/${item.href}`
                  ? 'bg-purple-50 text-purple-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <Icon
                className={cn(
                  'mr-3 h-5 w-5',
                  location.pathname === `/dashboard/${item.href}`
                    ? 'text-purple-600'
                    : 'text-gray-400 group-hover:text-gray-500'
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-gray-200 p-4">
        <Link
          to="/settings"
          className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        >
          <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
          Settings
        </Link>
        <button
          onClick={() => {/* TODO: Implement logout */}}
          className="group mt-1 flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        >
          <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
          Log out
        </button>
      </div>
    </div>
  );
}
