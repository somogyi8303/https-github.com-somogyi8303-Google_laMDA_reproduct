
import React from 'react';
import { ResearchModule } from '../types';

interface ResearchLabProps {
  modules: ResearchModule[];
}

export const ResearchLab: React.FC<ResearchLabProps> = ({ modules }) => {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto chat-scrollbar">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
              <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h1 className="text-3xl font-bold glow-text">Neural Lab: LaMDA 137B</h1>
          </div>
          <p className="text-slate-400 font-mono text-sm tracking-tight">Project: Reproduction & Optimization (Current: Linguistic Interface Implementation)</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Module List */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mb-4">Architecture Stack</h2>
            {modules.map(module => (
              <div key={module.id} className="glass p-6 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">{module.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{module.description}</p>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-1 rounded border ${
                    module.status === 'Testing' ? 'border-amber-500/50 text-amber-400' : 'border-sky-500/50 text-sky-400'
                  }`}>
                    {module.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {module.techStack.map(tech => (
                    <span key={tech} className="text-[10px] bg-white/5 text-slate-400 px-2 py-0.5 rounded border border-white/5">{tech}</span>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase">
                    <span>Integrity Check</span>
                    <span>{module.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-1000`}
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal / Snippet Preview */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mb-4">Active Console</h2>
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col h-[500px] shadow-2xl">
              <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 ml-4">tokenizer_module.py • Operational Test</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-y-auto chat-scrollbar bg-[#010409]">
                <div className="space-y-2">
                  <p className="text-slate-500"># Initializing LaMDATokenizer with XLM-RoBERTa-base...</p>
                  <p className="text-emerald-400">Loading tokenizer: xlm-roberta-base...</p>
                  <p className="text-emerald-400">Tokenizer ready. Vocab size: 250002 tokens.</p>
                  <p className="text-slate-300 mt-4">Input text: 'A Somogyi Strategy & Research Kft. a jövőt építi.'</p>
                  <p className="text-sky-400">Tokens (Tensor): tensor([ 0, 62, 21915, 6271, 355, 11453, 5801, ...])</p>
                  <p className="text-emerald-400 mt-2">Decoded back: 'A Somogyi Strategy & Research Kft. a jövőt építi.'</p>
                  <p className="text-emerald-500 font-bold mt-4 animate-pulse">[SUCCESS] Tokenizer is working perfectly.</p>
                  <div className="pt-4 border-t border-slate-800 mt-4">
                    <p className="text-indigo-400 italic">"Peti, the linguistic interface is stable. The tensor mapping for Hungarian characters shows zero distortion. We are ready for the Encoder architecture."</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto p-4 bg-slate-900/50 border-t border-slate-800">
                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  READY FOR NEXT MODULE: TRANSFORMER_ENCODER_V1
                </div>
              </div>
            </div>
            
            {/* Quick Strategic Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-2xl border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase mb-1">Compute Load</div>
                <div className="text-xl font-bold text-slate-200">12.4 TFLOPS</div>
              </div>
              <div className="glass p-4 rounded-2xl border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase mb-1">Memory (VRAM)</div>
                <div className="text-xl font-bold text-slate-200">24.1 GB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
