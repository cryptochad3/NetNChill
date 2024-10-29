import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { VideoPlayer } from './components/VideoPlayer';
import { StreamInfo } from './components/StreamInfo';
import { ChatPanel } from './components/ChatPanel';

function Stream() {
  return (
    <div className="min-h-screen bg-gray-100 pl-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <VideoPlayer isHost={false} />
            <StreamInfo 
              title="🎮 Friday Night Gaming Stream!"
              hostName="GameMaster"
              viewerCount={1234}
              category="Gaming"
            />
          </div>
          <div className="lg:col-span-1 h-[calc(100vh-12rem)]">
            <ChatPanel />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="relative">
          <Navigation />
          <Routes>
            <Route path="/" element={<Stream />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;