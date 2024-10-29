import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navigation() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/dashboard', icon: Layout, label: 'Dashboard' },
  ];

  if (!user) return null;

  return (
    <nav className="fixed top-0 left-0 h-screen w-16 bg-white shadow-lg flex flex-col items-center py-8">
      <div className="flex-1 flex flex-col items-center gap-6">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`p-3 rounded-lg transition-colors relative group ${
              isActive(path) 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              {label}
            </span>
          </Link>
        ))}
      </div>
      
      <div className="flex flex-col items-center gap-6">
        <Link
          to="/settings"
          className={`p-3 rounded-lg transition-colors relative group ${
            isActive('/settings') 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Settings className="w-6 h-6" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
            Settings
          </span>
        </Link>
        <button
          onClick={() => logout()}
          className="p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors relative group"
        >
          <LogOut className="w-6 h-6" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
            Logout
          </span>
        </button>
      </div>
    </nav>
  );
}