import { memo } from "react";
import { Todo } from "../../types/TodoListTypes";
import { TodoTasks } from "./TodoTasks";
import { TodoContent } from "./TodoContent";

/**
 * TodoList Component
 * Displays the list of todos in a grid layout
 */
export const TodoList = memo(
  ({
    todos,
    onTodoClick,
    onTodoDelete,
  }: {
    todos: Todo[];
    onTodoClick: (todo: Todo) => void;
    onTodoDelete: (id: number) => void;
  }) => (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr mb-10">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="relative bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group"
          onClick={() => onTodoClick(todo)}
        >
          {/* todo content */}
          <TodoContent
            title={todo.title}
            icon={todo.icon}
            onClick={(e) => {
              e.stopPropagation();
              onTodoDelete(todo.id);
            }}
          />

          {/* todo tasks */}
          <TodoTasks tasks={todo?.tasks ?? []} />

          {/* complete task */}
          {todo.completed && <CompletedTask />}

          {/* empty todo  */}
          {todo.tasks.length === 0 && <EmptyTask />}
        </li>
      ))}
    </ul>
  )
);

TodoList.displayName = "TodoList";

const CompletedTask = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-secondary/30 rounded-lg pointer-events-none">
      <span className="text-sm rounded-md px-4 py-2 absolute z-10 bg-accent text-card">
        Completed
      </span>
    </div>
  );
};

const EmptyTask = () => {
  return <span className="text-sm text-secondary">No tasks yet</span>;
};
