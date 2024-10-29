import { useState } from 'react';
import { Copy, Settings } from 'lucide-react';

export function StreamSettings() {
  const [streamKey] = useState('live_123456789');
  const [showKey, setShowKey] = useState(false);

  const copyStreamKey = () => {
    navigator.clipboard.writeText(streamKey);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Stream Settings
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Stream URL
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value="rtmp://streaming.example.com/live"
              className="flex-1 px-4 py-2 border rounded-lg bg-gray-50"
            />
            <button
              onClick={copyStreamKey}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Stream Key
          </label>
          <div className="flex items-center gap-2">
            <input
              type={showKey ? 'text' : 'password'}
              readOnly
              value={streamKey}
              className="flex-1 px-4 py-2 border rounded-lg bg-gray-50"
            />
            <button
              onClick={() => setShowKey(!showKey)}
              className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50"
            >
              {showKey ? 'Hide' : 'Show'}
            </button>
            <button
              onClick={copyStreamKey}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Recommended Settings</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Video Bitrate</p>
              <p className="text-gray-600">4000-6000 Kbps</p>
            </div>
            <div>
              <p className="font-medium">Audio Bitrate</p>
              <p className="text-gray-600">128-160 Kbps</p>
            </div>
            <div>
              <p className="font-medium">Resolution</p>
              <p className="text-gray-600">1920x1080</p>
            </div>
            <div>
              <p className="font-medium">FPS</p>
              <p className="text-gray-600">60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}