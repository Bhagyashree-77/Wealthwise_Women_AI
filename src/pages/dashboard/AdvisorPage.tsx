import React from 'react';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { Card } from '@/components/ui/Card';
import { MessageSquare } from 'lucide-react';

export function AdvisorPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Financial Advisor</h1>
            <p className="text-purple-100">Get personalized financial guidance and recommendations</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}
