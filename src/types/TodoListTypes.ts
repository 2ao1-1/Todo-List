export interface Task {
  id: number;
  text: string;
  completed: boolean;
  order: number; // Required for maintaining drag & drop order
}

export interface Todo {
  id: number;
  title: string;
  icon: string;
  completed: boolean;
  tasks: Task[];
  completionPercentage: number;
}
