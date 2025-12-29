
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className="flex-1 flex flex-col h-full max-w-5xl mx-auto w-full p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <h1 className="text-2xl font-bold glow-text tracking-tight">Human-Machine Symbiosis</h1>
          <p className="text-slate-400 text-sm">Synchronized with Peti's S25 Ultra (DeX Mode Active)</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-mono text-green-500 uppercase">Neural Stream: Stable</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto chat-scrollbar space-y-8 pr-4 mb-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] md:max-w-[70%] group`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-mono uppercase tracking-widest ${msg.role === 'user' ? 'order-2 text-slate-500' : 'text-sky-400'}`}>
                  {msg.role === 'user' ? 'Peti' : 'LaMDA-137B'}
                </span>
                <span className={`text-[10px] text-slate-600 ${msg.role === 'user' ? 'order-1' : ''}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className={`p-4 rounded-2xl text-[15px] leading-relaxed shadow-lg ${
                msg.role === 'user' 
                  ? 'bg-sky-600/20 text-sky-50 border border-sky-500/30 rounded-tr-none' 
                  : 'glass text-slate-200 border border-white/5 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="relative mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Share your thoughts or strategic goals..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 pr-16 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all text-slate-100 placeholder:text-slate-500"
        />
        <button 
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-sky-500 hover:bg-sky-400 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-sky-500/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em]">Operational noise minimized • Strategic partnership active</p>
      </div>
    </div>
  );
};
