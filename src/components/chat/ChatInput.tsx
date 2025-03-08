import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2 p-4 border-t">
      <div className="flex-1">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask your financial question..."
          className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          rows={3}
          disabled={disabled}
        />
      </div>
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="flex h-10 items-center gap-2 rounded-lg bg-purple-600 px-4 text-white transition-colors hover:bg-purple-700 disabled:bg-gray-300"
      >
        <Send className="h-4 w-4" />
        Send
      </button>
    </form>
  );
}
