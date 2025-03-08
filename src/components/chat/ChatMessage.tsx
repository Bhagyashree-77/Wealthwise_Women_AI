import React from 'react';
import { ChatMessage as ChatMessageType } from '@/lib/types/chat';
import { User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant';

  return (
    <div className={`flex gap-3 ${isAssistant ? 'bg-purple-50' : ''} p-4`}>
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
        isAssistant ? 'bg-purple-600' : 'bg-gray-600'
      }`}>
        {isAssistant ? (
          <Bot className="h-5 w-5 text-white" />
        ) : (
          <User className="h-5 w-5 text-white" />
        )}
      </div>
      <div className="flex-1">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
        {message.attachments?.map((attachment, index) => (
          <div key={index} className="mt-2 rounded-lg border border-gray-200 p-3">
            {/* Render different attachment types */}
            {attachment.type === 'chart' && (
              <div className="h-48">
                {/* Chart component would go here */}
              </div>
            )}
            {attachment.type === 'metric' && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{attachment.data.label}</span>
                <span className="font-medium">{attachment.data.value}</span>
              </div>
            )}
          </div>
        ))}
        <div className="mt-1 text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
