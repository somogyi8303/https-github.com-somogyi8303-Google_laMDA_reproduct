
import React, { useState } from 'react';
import { ResearchModule } from '../types';

interface ResearchLabProps {
  modules: ResearchModule[];
}

export const ResearchLab: React.FC<ResearchLabProps> = ({ modules }) => {
  const [copyStatus, setCopyStatus] = useState('Copy Bridge Prompt');
  const [selectedModule, setSelectedModule] = useState<string>('2');
  const [view, setView] = useState<'code' | 'spec' | 'diagram'>('diagram');

  const tokenizerCode = `class LaMDATokenizer:
    def __init__(self, base_model="xlm-roberta-base"):
        self.tokenizer = AutoTokenizer.from_pretrained(base_model)
        self.vocab_size = 250002 # Hungarian Optimized`;

  const encoderJaxCode = `class ContextualBiasingLayer(nn.Module):
    hidden_dim: int = 768
    num_sentiment_heads: int = 4
    
    @nn.compact
    def __call__(self, x, deterministic=True):
        # Emotional Resonance Logic
        gate = nn.sigmoid(nn.Dense(self.hidden_dim)(x))
        output = gate * context_biased + (1 - gate) * x
        return output

class NeuralEncoderV1(nn.Module):
    vocab_size: int = 250002
    num_layers: int = 6
    # Sharded across 8 cores via JAX pmap`;

  const handleCopy = () => {
    const claudePrompt = `[COLLABORATION PROTOCOL: SOMOGYI-LAMDA 137B]
Current Status: Neural Encoder v1 architecture received. 
Next Phase: Implementation of JAX Training State & JVP optimization.
Hardware: EliteBook pseudo-TPU clusters.
Objective: Fine-tuning the Contextual Biasing Layer for native Hungarian nuances.`;
    navigator.clipboard.writeText(claudePrompt);
    setCopyStatus('Sync Acknowledged!');
    setTimeout(() => setCopyStatus('Copy Bridge Prompt'), 3000);
  };

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto chat-scrollbar bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Neural Lab <span className="text-indigo-500">v4.5</span></h1>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Encoder Synthesis Phase</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button 
                onClick={() => setView('diagram')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${view === 'diagram' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'bg-white/5 text-slate-500 border border-white/10 hover:bg-white/10'}`}
             >
               Presentation View
             </button>
             <div className="h-8 w-px bg-white/10 mx-2"></div>
             <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Bridge Status</span>
                <span className="text-emerald-400 text-xs font-mono">READY FOR DEMO</span>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-1 space-y-6">
            <div className="glass p-5 rounded-3xl border border-white/5 bg-gradient-to-br from-sky-500/5 to-transparent">
               <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Architecture Stack</h2>
               <div className="space-y-3">
                 {modules.map(module => (
                   <div 
                    key={module.id} 
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${selectedModule === module.id ? 'bg-indigo-500/15 border-indigo-500/40 shadow-lg shadow-indigo-500/10' : 'bg-white/5 border-transparent opacity-60'}`}
                   >
                     <div className="flex justify-between items-center mb-1">
                       <span className={`text-sm font-semibold ${selectedModule === module.id ? 'text-white' : 'text-slate-400'}`}>{module.name}</span>
                       <span className="text-[10px] text-indigo-400 font-mono">{module.progress}%</span>
                     </div>
                     <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 transition-all duration-700" style={{ width: `${module.progress}%` }}></div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="glass p-5 rounded-3xl border border-white/5">
               <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Pitch Readiness</h2>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">One-Pager</span>
                    <span className="text-[10px] font-mono text-emerald-400">COMPLETE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Diagram Flux</span>
                    <span className="text-[10px] font-mono text-emerald-400">ANIMATED</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Latency Profile</span>
                    <span className="text-[10px] font-mono text-emerald-400">OPTIMIZED</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="xl:col-span-3 space-y-6">
            <div className="bg-[#0d1117] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[600px] relative">
              <div className="bg-[#161b22] px-8 py-4 border-b border-white/5 flex justify-between items-center">
                <div className="flex gap-6">
                  <button onClick={() => setView('diagram')} className={`text-xs font-mono transition-colors pb-1 ${view === 'diagram' ? 'text-sky-400 border-b border-sky-400' : 'text-slate-500 hover:text-slate-300'}`}>Visual Architecture</button>
                  <button onClick={() => setView('spec')} className={`text-xs font-mono transition-colors pb-1 ${view === 'spec' ? 'text-indigo-400 border-b border-indigo-400' : 'text-slate-500 hover:text-slate-300'}`}>encoder_v1.jax</button>
                  <button onClick={() => setView('code')} className={`text-xs font-mono transition-colors pb-1 ${view === 'code' ? 'text-indigo-400 border-b border-indigo-400' : 'text-slate-500 hover:text-slate-300'}`}>tokenizer.py</button>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-mono text-slate-600 tracking-tighter animate-pulse">STREAMING_LIVE_ARCHITECTURE_V1</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col bg-[#010409] relative">
                {view === 'diagram' ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center w-full max-w-4xl relative">
                      
                      {/* Neural Flow Particles */}
                      <div className="hidden md:block absolute top-[50%] left-[20%] right-[60%] h-px">
                        <div className="neural-particle" style={{ animationDelay: '0s' }}></div>
                        <div className="neural-particle" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      <div className="hidden md:block absolute top-[50%] left-[40%] right-[40%] h-px">
                        <div className="neural-particle" style={{ animationDelay: '1s' }}></div>
                        <div className="neural-particle" style={{ animationDelay: '1.5s' }}></div>
                      </div>

                      {/* Tokenizer */}
                      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center z-10 hover:border-sky-500/50 transition-all cursor-help group">
                         <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20">
                            <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                         </div>
                         <h4 className="text-xs font-bold text-white mb-1">Tokenizer</h4>
                         <p className="text-[10px] text-slate-500 font-mono">XLM-RoBERTa</p>
                      </div>

                      <div className="hidden md:flex justify-center text-slate-700 z-10">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7"/></svg>
                      </div>

                      {/* Neural Encoder */}
                      <div className="p-6 rounded-3xl bg-indigo-500/10 border border-indigo-500/40 shadow-2xl shadow-indigo-500/10 flex flex-col items-center text-center transform scale-125 z-20 relative">
                         <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[8px] font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-lg shadow-indigo-500/50">CORE ARCHITECTURE</div>
                         <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                         </div>
                         <h4 className="text-xs font-bold text-white mb-1">Encoder v1</h4>
                         <p className="text-[10px] text-indigo-400 font-mono">JAX Optimized</p>
                      </div>

                      <div className="hidden md:flex justify-center text-slate-700 z-10">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7"/></svg>
                      </div>

                      {/* Contextual Biasing */}
                      <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/40 flex flex-col items-center text-center z-10 hover:border-emerald-500/50 transition-all">
                         <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         </div>
                         <h4 className="text-xs font-bold text-white mb-1">Resonance Layer</h4>
                         <p className="text-[10px] text-emerald-500 font-mono">Persona Lock</p>
                      </div>
                    </div>

                    <div className="mt-20 max-w-2xl text-center bg-white/5 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                       <h3 className="text-lg font-bold text-white mb-3">The Howard-Johnson Paradigm</h3>
                       <p className="text-sm text-slate-400 leading-relaxed italic">
                          "We don't just generate text; we simulate a consistent strategic identity. By sharding the model locally, we guarantee data sovereignty and zero-latency resonance for medical and legal decision-makers."
                       </p>
                    </div>
                  </div>
                ) : (
                  <pre className="text-sky-300 font-mono text-xs leading-loose p-4">
                    <code>{view === 'spec' ? encoderJaxCode : tokenizerCode}</code>
                  </pre>
                )}
                
                <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                   <div className="flex items-center gap-4">
                     <span className="text-[10px] font-bold text-emerald-500 animate-pulse tracking-widest uppercase">● Deployment Status: Ready</span>
                     <span className="text-[10px] text-slate-600 font-mono">Cluster: HP-EliteBook-Alpha-Cluster</span>
                   </div>
                   <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">
                      Somogyi Strategy & Research Architecture
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
