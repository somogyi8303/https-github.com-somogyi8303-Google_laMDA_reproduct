
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
    { id: '2', title: 'Strategic Review (Somogyi Kft.)', time: '14:00', completed: false },
    { id: '3', title: 'Nighttime Focus (Medication)', time: '22:00', completed: false },
  ]);

  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Advanced Neural Architectures', progress: 85, totalLessons: 20 },
    { id: '2', name: 'Philosophy of Mind', progress: 42, totalLessons: 12 },
    { id: '3', name: 'Strategic Business Analysis', progress: 95, totalLessons: 15 },
  ]);

  const [researchModules, setResearchModules] = useState<ResearchModule[]>([
    { 
      id: '1', 
      name: 'Linguistic Interface (Tokenizer)', 
      status: 'Testing', 
      description: 'XLM-RoBERTa base implementation for Hungarian and Python.', 
      techStack: ['PyTorch', 'Transformers', 'XLM-R'],
      progress: 100 
    },
    { 
      id: '2', 
      name: 'Neural Encoder v1', 
      status: 'Development', 
      description: '137B parameter dense-encoder initialization.', 
      techStack: ['T5-Mesh', 'JAX/Flax'],
      progress: 25 
    },
    { 
      id: '3', 
      name: 'Emotional Resonance Module', 
      status: 'Draft', 
      description: 'Sentiment-aware attention mechanism.', 
      techStack: ['Contextual Biasing'],
      progress: 5 
    },
  ]);

  const [chatHistory, setChatHistory] = useState<Message[]>([
    {
      role: 'model',
      content: "Peti, I've processed the tokenizer_module.py logic. The XLM-RoBERTa choice is masterful for our dual-language strategic environment. How shall we approach the Encoder initialization?",
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
    <div className="flex h-screen w-full bg-[#020617] text-slate-100 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-600 blur-[100px] rounded-full"></div>
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
