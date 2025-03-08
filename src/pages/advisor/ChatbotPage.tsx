import React, { useState, useEffect } from 'react';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { ChatInput } from '@/components/chat/ChatInput';
import { ChatSidebar } from '@/components/chat/ChatSidebar';
import { sendChatMessage, getChatHistory, getChatContext } from '@/lib/services/chat';
import { ChatMessage as ChatMessageType, ChatSession, ChatContext } from '@/lib/types/chat';

export function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [context, setContext] = useState<ChatContext | null>(null);

  useEffect(() => {
    async function initialize() {
      const [historyData, contextData] = await Promise.all([
        getChatHistory(),
        getChatContext()
      ]);
      setSessions(historyData);
      setContext(contextData);
      if (historyData.length > 0) {
        setActiveSessionId(historyData[0].id);
      }
    }

    initialize();
  }, []);

  const handleSendMessage = async (content: string) => {
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await sendChatMessage(content, context || undefined);
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setActiveSessionId('new');
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatSidebar
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSessionSelect={setActiveSessionId}
        onNewChat={handleNewChat}
      />
      <div className="flex flex-1 flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        <ChatInput onSend={handleSendMessage} disabled={loading} />
      </div>
    </div>
  );
}
