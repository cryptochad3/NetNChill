import { Send } from 'lucide-react';
import { useState } from 'react';
import { ChatMessage } from './ChatMessage';

export function ChatPanel() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Live Chat</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <ChatMessage
          username="StreamHost"
          message="Welcome to today's stream everyone! 🎉"
          timestamp={new Date()}
          userType="host"
        />
        <ChatMessage
          username="ModeratorJane"
          message="Remember to follow the chat rules!"
          timestamp={new Date(Date.now() - 5000)}
          userType="moderator"
        />
        <ChatMessage
          username="SuperFan123"
          message="Love the content! Keep it up!"
          timestamp={new Date(Date.now() - 10000)}
          userType="subscriber"
        />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}