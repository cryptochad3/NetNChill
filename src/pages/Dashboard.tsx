import { StreamSettings } from '../components/Dashboard/StreamSettings';
import { StreamAnalytics } from '../components/Dashboard/StreamAnalytics';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 pl-16">
      <header className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-4">
              <img
                src={user.photoURL || ''}
                alt={user.displayName || ''}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">{user.displayName}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <StreamAnalytics />
          <StreamSettings />
        </div>
      </main>
    </div>
  );
}