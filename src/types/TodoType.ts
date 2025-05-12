export interface Task {
  id: number;
  text: string;
  completed: boolean;
  order: number;
  created_at?: string;
  updated_at?: string;
  todo_id?: number;
}

export interface Todo {
  id: number;
  title: string;
  tasks: Task[];
  created_at?: string;
  updated_at?: string;
  user_id?: number;
}

export interface taskData {
  text: string;
  order?: number | undefined;
  completed?: boolean;
}

export interface TodosResponse {
  todos: Todo[];
}

export interface TodoResponse {
  todo: Todo;
}
