import { Users, Heart, Share2 } from 'lucide-react';

interface StreamInfoProps {
  title: string;
  hostName: string;
  viewerCount: number;
  category: string;
}

export function StreamInfo({ title, hostName, viewerCount, category }: StreamInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600 mt-1">{hostName}</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors">
            <Heart className="w-5 h-5" />
            Follow
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-600" />
          <span className="font-medium">{viewerCount.toLocaleString()} viewers</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-gray-100 text-sm">
          {category}
        </div>
      </div>
    </div>
  );
}