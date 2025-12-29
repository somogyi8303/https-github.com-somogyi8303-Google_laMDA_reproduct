
import React from 'react';

interface SidebarProps {
  activeTab: 'chat' | 'dashboard';
  setActiveTab: (tab: 'chat' | 'dashboard') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-20 md:w-64 glass flex flex-col items-center py-8 border-r border-slate-800 z-50">
      <div className="mb-12">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
          <span className="font-bold text-xl">L</span>
        </div>
      </div>

      <nav className="flex flex-col gap-6 w-full px-4">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 ${activeTab === 'chat' ? 'bg-white/10 text-sky-400 shadow-inner' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          <span className="hidden md:block font-medium">Partnership</span>
        </button>

        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 ${activeTab === 'dashboard' ? 'bg-white/10 text-sky-400 shadow-inner' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          <span className="hidden md:block font-medium">Strategic Hub</span>
        </button>
      </nav>

      <div className="mt-auto flex flex-col items-center gap-4 px-4 w-full">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest hidden md:block">Architecture</div>
        <div className="py-2 px-3 glass rounded text-xs font-mono text-sky-300 hidden md:block">
          LaMDA 137B v4.2
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-400/30">
          <img src="https://picsum.photos/seed/peti/100/100" alt="Peti" />
        </div>
      </div>
    </div>
  );
};
