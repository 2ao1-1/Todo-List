import { memo } from "react";
import { Task } from "../../types/TodoListTypes";
import { Droppable } from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";

interface TaskListProps {
  todoId: number;
  tasks: Task[];
  selectedTask: number | null;
  editingTaskId: number | null;
  editingTaskText: string;
  onToggleTask: (taskId: number) => void;
  onEditTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onEditingTextChange: (text: string) => void;
  onEditingKeyDown: (e: React.KeyboardEvent, taskId: number) => void;
  onCancelEditing: () => void;
  onSelectTask: (taskId: number) => void;
}

/**
 * TaskList Component
 * Handles rendering and managing a list of tasks with drag and drop functionality
 */
const TaskList = memo(
  ({
    todoId,
    tasks,
    selectedTask,
    editingTaskId,
    editingTaskText,
    onToggleTask,
    onEditTask,
    onEditTaskII,
    onDeleteTask,
    onEditingTextChange,
    onEditingKeyDown,
    onCancelEditing,
    onSelectTask,
  }: TaskListProps) => {
    const sortedTasks = [...tasks].sort((a, b) => a.order - b.order);

    if (tasks.length === 0) {
      return <p className="text-center text-secondary py-4">No tasks yet</p>;
    }

    return (
      <Droppable droppableId={`todo-${todoId}`}>
        {(provided) => (
          <ul
            className="space-y-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {sortedTasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                index={index}
                selectedTask={selectedTask}
                editingTaskId={editingTaskId}
                editingTaskText={editingTaskText}
                onToggleTask={onToggleTask}
                onEditTask={onEditTask}
                onEditTaskII={onEditTaskII}
                onDeleteTask={onDeleteTask}
                onEditingTextChange={onEditingTextChange}
                onEditingKeyDown={onEditingKeyDown}
                onCancelEditing={onCancelEditing}
                onSelect={onSelectTask}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    );
  }
);

TaskList.displayName = "TaskList";

export default TaskList;
