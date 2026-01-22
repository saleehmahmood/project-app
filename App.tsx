import React, { useState } from 'react';
import { 
  Activity, 
  BarChart3, 
  Map, 
  ClipboardCheck, 
  DollarSign,
  Menu,
  X,
  Image as ImageIcon
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Trends from './components/Trends';
import Roadmap from './components/Roadmap';
import Incentives from './components/Incentives';
import Finance from './components/Finance';
import ImageStudio from './components/ImageStudio';
import Logo from './components/Logo';

type Page = 'dashboard' | 'trends' | 'roadmap' | 'incentives' | 'finance' | 'visuals';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'trends', label: 'Historical Trends', icon: BarChart3 },
    { id: 'roadmap', label: 'Compliance Roadmap', icon: ClipboardCheck },
    { id: 'incentives', label: 'Global Incentives', icon: Map },
    { id: 'finance', label: 'Financial Impact', icon: DollarSign },
    { id: 'visuals', label: 'Visual Studio', icon: ImageIcon },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'trends': return <Trends />;
      case 'roadmap': return <Roadmap />;
      case 'incentives': return <Incentives />;
      case 'finance': return <Finance />;
      case 'visuals': return <ImageStudio />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-['Inter']">
      {/* Mobile Header */}
      <div className="md:hidden bg-[#1E1E1E] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg border-b border-white/5">
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8" variant="emerald" />
          <span className="font-black text-xl tracking-tighter uppercase">STACKZERO</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:relative md:translate-x-0 transition duration-300 ease-in-out
        w-72 bg-[#121212] text-white z-40 flex flex-col shadow-2xl border-r border-white/5
      `}>
        <div className="p-8 hidden md:flex items-center gap-4 border-b border-white/5">
          <div className="bg-[#1E1E1E] p-2.5 rounded-xl border border-white/10">
            <Logo className="w-8 h-8" variant="emerald" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter uppercase leading-none">STACKZERO</span>
            <span className="text-[10px] font-bold text-emerald-500 tracking-[0.3em] uppercase mt-1">Industrial Intelligence</span>
          </div>
        </div>

        <div className="flex-1 py-10 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id as Page);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group
                  ${isActive 
                    ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                    : 'text-slate-500 hover:bg-white/5 hover:text-slate-200'}
                `}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className={`text-sm font-bold tracking-wide ${isActive ? 'text-white' : ''}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="p-8 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Enterprise Core Active</span>
          </div>
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-tight">© 2025 STACKZERO SYSTEMS</p>
          <p className="text-slate-700 text-[9px] mt-1 font-medium">Compliance Architecture v2.8.4</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto bg-[#F8FAFC] scroll-smooth">
        <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-16">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;