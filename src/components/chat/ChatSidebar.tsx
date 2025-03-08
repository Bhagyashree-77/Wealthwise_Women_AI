import React from 'react';
import { ChatSession } from '@/lib/types/chat';
import { MessageSquare, PlusCircle } from 'lucide-react';

interface ChatSidebarProps {
  sessions: ChatSession[];
  activeSessionId: string;
  onSessionSelect: (sessionId: string) => void;
  onNewChat: () => void;
}

export function ChatSidebar({
  sessions,
  activeSessionId,
  onSessionSelect,
  onNewChat
}: ChatSidebarProps) {
  return (
    <div className="w-64 border-r border-gray-200 bg-white">
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
        >
          <PlusCircle className="h-4 w-4" />
          New Chat
        </button>
      </div>
      <div className="space-y-1 p-2">
        {sessions.map((session) => (
          <button
            key={session.id}
            onClick={() => onSessionSelect(session.id)}
            className={`flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-gray-100 ${
              session.id === activeSessionId ? 'bg-purple-50' : ''
            }`}
          >
            <MessageSquare className="h-5 w-5 text-gray-500" />
            <div className="flex-1 overflow-hidden">
              <h3 className="font-medium text-gray-900 truncate">
                {session.title}
              </h3>
              <p className="text-sm text-gray-500 truncate">
                {session.lastMessage}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
