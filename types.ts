
export interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export interface Reminder {
  id: string;
  title: string;
  time: string;
  completed: boolean;
}

export interface Course {
  id: string;
  name: string;
  progress: number;
  totalLessons: number;
}

export interface AppState {
  reminders: Reminder[];
  courses: Course[];
  chatHistory: Message[];
}
