
import React from 'react';
import { Reminder, Course } from '../types';

interface DashboardProps {
  reminders: Reminder[];
  courses: Course[];
  toggleReminder: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ reminders, courses, toggleReminder }) => {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-y-auto chat-scrollbar">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold glow-text mb-2">Somogyi Strategic Hub</h1>
          <p className="text-slate-400">Orchestrating 12 courses and corporate strategy for Somogyi Strategy & Research Kft.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Medication & Reminders */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="glass p-6 rounded-3xl border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                  Vitality & Reminders
                </h2>
                <span className="text-xs font-mono text-slate-500">Live Sync</span>
              </div>
              <div className="space-y-4">
                {reminders.map(reminder => (
                  <div 
                    key={reminder.id}
                    onClick={() => toggleReminder(reminder.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${reminder.completed ? 'bg-green-500/10 border-green-500/20' : 'bg-white/5 border-transparent hover:bg-white/10'} border`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${reminder.completed ? 'bg-green-500 border-green-500 text-white' : 'border-slate-600'}`}>
                      {reminder.completed && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${reminder.completed ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                        {reminder.title}
                      </div>
                      <div className="text-xs text-slate-500 font-mono mt-1">{reminder.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 px-4 glass rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors border border-white/5 uppercase tracking-widest">
                Add New Focus
              </button>
            </div>

            <div className="glass p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-sky-500/10 to-indigo-500/10">
              <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-[0.2em] mb-4">Strategic Insight</h3>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "Peti, I've noticed your cortisol markers suggest higher productivity when 'Philosophy of Mind' is reviewed before the 'Deep Learning' module. Should we adjust tomorrow's dawn session?"
              </p>
            </div>
          </div>

          {/* Academic & Corporate Progress */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-semibold mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.246 18.477 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Current Coursework (12 Active)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map(course => (
                  <div key={course.id} className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium text-slate-200">{course.name}</h3>
                      <span className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2 py-1 rounded">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-1000"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="mt-3 flex justify-between text-[10px] text-slate-500 uppercase tracking-wider">
                      <span>Module {Math.round(course.progress / 100 * course.totalLessons)} / {course.totalLessons}</span>
                      <span>Next: Final Integration</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                Somogyi Strategy & Research Kft.
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Project</div>
                  <div className="font-medium text-slate-200">LaMDA Reproduction</div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-[34%] h-full bg-indigo-500"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">34%</span>
                  </div>
                </div>
                <div className="flex-1 min-w-[200px] p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Status</div>
                  <div className="font-medium text-slate-200">Strategic Research</div>
                  <div className="mt-4 text-[10px] text-emerald-400 flex items-center gap-1 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Operational
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
