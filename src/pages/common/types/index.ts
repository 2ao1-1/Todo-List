// Basic Todo and Task types
export interface Todo {
  id: number;
  title: string;
  icon: string;
  tasks: Task[];
  completed: boolean;
  completionPercentage: number;
}

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  order: number;
}

// Form data types
export interface EditTodoFormData {
  editTodoTitle: string;
  editTodoIcon: string;
}

export interface EditTaskFormData {
  editTaskText: string;
}

export interface NewTaskFormData {
  newTaskText: string;
}

// API response types
export interface TodoResponse {
  id: number;
  title: string;
  icon: string;
  tasks: Task[];
  completionPercentage: number;
}

// Mutation types
export interface EditTodoMutation {
  id: number;
  data: {
    title: string;
    icon: string;
  };
}

export interface AddTaskMutation {
  todoId: number;
  taskData: {
    text: string;
    order: number;
  };
}

export interface EditTaskMutation {
  todoId: number;
  taskId: number;
  taskData: Partial<{
    text: string;
    completed: boolean;
    order: number;
  }>;
}

export interface DeleteTaskMutation {
  todoId: number;
  taskId: number;
}
