import React from 'react';
import { Card } from '@/components/ui/Card';
import { Users, MessageSquare, TrendingUp } from 'lucide-react';

export function CommunityPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Investment Community</h1>
            <p className="text-yellow-100">Connect with fellow investors and share insights</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Community Feed</h2>
            <div className="space-y-4">
              {/* Placeholder for community feed */}
              <p className="text-gray-600">Community features coming soon...</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Top Contributors</h2>
              <div className="space-y-2">
                {/* Placeholder for top contributors */}
                <p className="text-gray-600">Loading contributors...</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Trending Topics</h2>
              <div className="space-y-2">
                {/* Placeholder for trending topics */}
                <p className="text-gray-600">Loading topics...</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
