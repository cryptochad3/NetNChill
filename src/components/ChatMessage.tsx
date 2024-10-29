import { formatDistanceToNow } from 'date-fns';
import { Crown, Medal, Star } from 'lucide-react';

interface ChatMessageProps {
  username: string;
  message: string;
  timestamp: Date;
  userType: 'host' | 'moderator' | 'subscriber' | 'guest';
}

const userBadges = {
  host: <Crown className="w-4 h-4 text-yellow-500" />,
  moderator: <Medal className="w-4 h-4 text-blue-500" />,
  subscriber: <Star className="w-4 h-4 text-purple-500" />,
  guest: null,
};

export function ChatMessage({ username, message, timestamp, userType }: ChatMessageProps) {
  return (
    <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center gap-2">
        <span className="font-medium flex items-center gap-1">
          {userBadges[userType]}
          {username}
        </span>
        <span className="text-xs text-gray-500">
          {formatDistanceToNow(timestamp, { addSuffix: true })}
        </span>
      </div>
      <p className="text-gray-700 mt-1">{message}</p>
    </div>
  );
}