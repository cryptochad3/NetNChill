import { BarChart, Users, Clock, Activity } from 'lucide-react';

export function StreamAnalytics() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BarChart className="w-5 h-5" />
          Stream Analytics
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Users className="w-5 h-5" />
            <span>Peak Viewers</span>
          </div>
          <p className="text-2xl font-bold">1,234</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Clock className="w-5 h-5" />
            <span>Stream Duration</span>
          </div>
          <p className="text-2xl font-bold">2:45:30</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Activity className="w-5 h-5" />
            <span>Average FPS</span>
          </div>
          <p className="text-2xl font-bold">60</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Activity className="w-5 h-5" />
            <span>Bitrate</span>
          </div>
          <p className="text-2xl font-bold">6000 kbps</p>
        </div>
      </div>
    </div>
  );
}