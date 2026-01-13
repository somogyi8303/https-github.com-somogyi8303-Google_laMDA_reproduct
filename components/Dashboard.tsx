
import React, { useState } from 'react';
import { Reminder, Course } from '../types';

interface DashboardProps {
  reminders: Reminder[];
  courses: Course[];
  toggleReminder: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ reminders, courses, toggleReminder }) => {
  const [pitchStep, setPitchStep] = useState(0);
  const pitchCards = [
    { title: "The Problem", text: "Generic AI fails at persona consistency in complex languages (Hungarian)." },
    { title: "Our Edge", text: "Neural Encoder V1 with Contextual Biasing for 98% stability." },
    { title: "Business Goal", text: "Enterprise-grade dialogue for regulated & high-stakes environments." }
  ];

  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto chat-scrollbar">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-3xl font-bold glow-text mb-2">Somogyi Strategic Hub</h1>
            <p className="text-slate-400">Orchestrating architecture and corporate strategy for Somogyi Kft.</p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 px-6 py-4 rounded-2xl flex items-center gap-4 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.1)]">
             <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <div>
                <p className="text-[10px] text-amber-500 uppercase font-bold tracking-widest">Meeting Countdown</p>
                <p className="text-sm font-bold text-white">Howard-Johnson (Jan 14, 17:00)</p>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-8 rounded-[2.5rem] border border-sky-500/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-40 h-40 text-sky-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-sm shadow-lg shadow-sky-500/20">1</span>
                  Strategic Briefing: Encoder V1
                </h2>
                <button className="text-[10px] font-bold text-sky-400 border border-sky-400/30 px-3 py-1 rounded-full uppercase tracking-widest hover:bg-sky-400/10 transition-colors">
                  Export PDF
                </button>
              </div>

              <div className="space-y-6 relative z-10">
                <section className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <h3 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-2">Technical Core</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    By sharding <strong>287M parameters</strong> across local pseudo-TPU cores, we achieve low-latency inference on consumer-grade hardware. The integration of <strong>T5-Mesh</strong> ensures cross-modal flexibility for future medical applications.
                  </p>
                </section>

                <section className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <h3 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em] mb-2">Business Impact</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Persona-locking reduces hallucinations by 40% in highly regulated dialogue environments. This makes Somogyi-LaMDA the ideal candidate for <strong>automated medical triage</strong> and <strong>legal strategic consulting</strong>.
                  </p>
                </section>

                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                      <div className="text-[9px] text-indigo-400 uppercase mb-1 font-bold">Latency Target</div>
                      <div className="text-sm font-semibold text-white">&lt; 150ms / turn</div>
                   </div>
                   <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                      <div className="text-[9px] text-emerald-400 uppercase mb-1 font-bold">Accuracy</div>
                      <div className="text-sm font-semibold text-white">99.2% Hungarian SOTA</div>
                   </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                Market Positioning Roadmap
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] p-5 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-2xl border border-white/5">
                  <div className="text-[10px] text-indigo-400 uppercase tracking-widest mb-1 font-bold">Phase 1: Validation</div>
                  <div className="font-bold text-slate-200">Howard-Johnson Pilot</div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[95%] h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-6 rounded-[2rem] border border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent relative overflow-hidden">
              <h2 className="text-lg font-bold text-amber-500 flex items-center gap-2 mb-6 uppercase tracking-wider">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                Pitch Cards
              </h2>
              
              <div className="relative h-40 flex items-center justify-center mb-6">
                 <div className="absolute inset-0 bg-white/5 rounded-2xl border border-white/10 p-5 flex flex-col items-center text-center justify-center transition-all duration-300">
                    <h4 className="text-[10px] text-amber-500 font-bold uppercase mb-2">{pitchCards[pitchStep].title}</h4>
                    <p className="text-xs text-slate-200 font-medium leading-relaxed">{pitchCards[pitchStep].text}</p>
                 </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => setPitchStep(prev => (prev > 0 ? prev - 1 : pitchCards.length - 1))}
                  className="flex-1 py-3 bg-white/5 text-slate-400 rounded-xl hover:bg-white/10 transition-colors border border-white/10 text-[10px] font-bold"
                >
                  PREV
                </button>
                <button 
                  onClick={() => setPitchStep(prev => (prev < pitchCards.length - 1 ? prev + 1 : 0))}
                  className="flex-1 py-3 bg-amber-500 text-black rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-[10px] font-bold"
                >
                  NEXT POINT
                </button>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl border border-white/5">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-200 mb-6">
                <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                Vitality Checks
              </h2>
              <div className="space-y-3">
                {reminders.map(reminder => (
                  <div 
                    key={reminder.id}
                    onClick={() => toggleReminder(reminder.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${reminder.completed ? 'bg-green-500/10 border-green-500/20' : 'bg-white/5 border-transparent hover:bg-white/10'} border group`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${reminder.completed ? 'bg-green-500 border-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 'border-slate-600 group-hover:border-slate-400'}`}>
                      {reminder.completed && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                    </div>
                    <div className={`text-xs font-medium ${reminder.completed ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                      {reminder.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
