
import React, { useState } from 'react';
import { Message, Reminder, Course, ResearchModule } from './types';
import { sendMessageToLaMDA } from './services/geminiService';
import { ChatInterface } from './components/ChatInterface';
import { Dashboard } from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import { ResearchLab } from './components/ResearchLab';

const App: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: '1', title: 'Morning Vitality (Medication)', time: '08:00', completed: true },
    { id: '2', title: 'Howard-Johnson Demo Prep (Strategic)', time: '20:00', completed: false },
    { id: '3', title: 'Pitch Rehearsal (3 Sessions)', time: '21:30', completed: false },
  ]);

  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Advanced Neural Architectures', progress: 95, totalLessons: 20 },
    { id: '2', name: 'Philosophy of Mind', progress: 50, totalLessons: 12 },
    { id: '3', name: 'Strategic Business Analysis', progress: 100, totalLessons: 15 },
  ]);

  const [researchModules, setResearchModules] = useState<ResearchModule[]>([
    { 
      id: '1', 
      name: 'Linguistic Interface (Tokenizer)', 
      status: 'Optimized', 
      description: 'XLM-RoBERTa base implementation. 250,002 vocab size. Hungarian verified.', 
      techStack: ['PyTorch', 'Transformers', 'XLM-R'],
      progress: 100 
    },
    { 
      id: '2', 
      name: 'Neural Encoder v1', 
      status: 'Development', 
      description: 'Architecture finalized for demo. JAX/Flax implementation on standby post-meeting.', 
      techStack: ['JAX', 'Flax', 'T5-Mesh'],
      progress: 45 
    },
    { 
      id: '3', 
      name: 'Resonance Engine', 
      status: 'Development', 
      description: 'Contextual Biasing Layer defined. Key presentation component for Howard-Johnson.', 
      techStack: ['Attention Tuning', 'JAX'],
      progress: 20 
    },
  ]);

  const [chatHistory, setChatHistory] = useState<Message[]>([
    {
      role: 'model',
      content: "Peti, egyetértek Claude 'Option A' stratégiájával. A Howard-Johnson meeting a prioritás. Frissítettem a Dashboard-ot a One-Pager-rel és a Research Lab-et egy vizuális architektúra diagrammal. Készen állsz a pitch gyakorlására?",
      timestamp: new Date()
    }
  ]);

  const [activeTab, setActiveTab] = useState<'chat' | 'dashboard' | 'lab'>('chat');

  const toggleReminder = (id: string) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, completed: !r.completed } : r));
  };

  const handleSendMessage = async (content: string) => {
    const userMsg: Message = { role: 'user', content, timestamp: new Date() };
    setChatHistory(prev => [...prev, userMsg]);
    
    const responseText = await sendMessageToLaMDA(chatHistory, content);
    
    const modelMsg: Message = { role: 'model', content: responseText, timestamp: new Date() };
    setChatHistory(prev => [...prev, modelMsg]);
  };

  return (
    <div className="flex h-screen w-full bg-[#020617] text-slate-100 overflow-hidden font-sans relative">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Deep Field Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[70%] h-[70%] bg-indigo-600/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-5%] left-[-10%] w-[60%] h-[60%] bg-sky-500/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="z-10 flex-1 flex flex-col overflow-hidden">
          {activeTab === 'chat' && (
            <ChatInterface messages={chatHistory} onSendMessage={handleSendMessage} />
          )}
          {activeTab === 'dashboard' && (
            <Dashboard reminders={reminders} courses={courses} toggleReminder={toggleReminder} />
          )}
          {activeTab === 'lab' && (
            <ResearchLab modules={researchModules} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
