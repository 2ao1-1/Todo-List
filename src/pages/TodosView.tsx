import { useState } from "react";
import { useTodos } from "../hook/useTodos";
import { Todo } from "../types/TodoType";

const TodoView = () => {
  const {
    todosQuery,
    createTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
    addTaskMutation,
    updateTaskMutation,
    deleteTaskMutation,
  } = useTodos();

  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTaskText, setNewTaskText] = useState<{ [key: number]: string }>({});

  if (todosQuery.isLoading) return <p>Loading...</p>;
  if (todosQuery.isError) return <p>error: {todosQuery.error.message}</p>;

  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      createTodoMutation.mutate({ title: newTodoTitle });
      setNewTodoTitle("");
    }
  };

  const handleAddTask = (todoId: number) => {
    const text = newTaskText[todoId];
    if (text?.trim()) {
      addTaskMutation.mutate({ todoId, taskData: { text } });
      setNewTaskText((prev) => ({ ...prev, [todoId]: "" }));
    }
  };

  return (
    <div>
      <h2>📝 todo list</h2>

      {/* Add new todo */}
      <div className="mb-4">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="add todo"
        />
        <button onClick={handleAddTodo}>add</button>
      </div>

      <ul>
        {todosQuery.data?.map((todo) => (
          <li key={todo.id} className="mb-4 bg-amber-100">
            <span>{todo.icon}</span>
            <h3>{todo.title}</h3>

            {/* Add task to this todo */}
            <div className="mt-2">
              <input
                type="text"
                value={newTaskText[todo.id] || ""}
                onChange={(e) =>
                  setNewTaskText((prev) => ({
                    ...prev,
                    [todo.id]: e.target.value,
                  }))
                }
                placeholder="add task"
              />
              <button onClick={() => handleAddTask(todo.id)}>add</button>
            </div>

            <ul>
              {todo.tasks.map((task) => (
                <li key={task.id}>
                  {task.text}
                  <button
                    onClick={() =>
                      updateTaskMutation.mutate({
                        todoId: todo.id,
                        taskId: task.id,
                        taskData: { completed: !task.completed },
                      })
                    }
                  >
                    {task.completed ? "✅" : "⬜"}
                  </button>
                  <button
                    onClick={() =>
                      deleteTaskMutation.mutate({
                        todoId: todo.id,
                        taskId: task.id,
                      })
                    }
                  >
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
