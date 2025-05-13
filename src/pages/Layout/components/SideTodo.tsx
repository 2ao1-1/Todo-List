import { useTodos } from "../../common/hook/useTodos";
import { Todo } from "../../common/types";
import { TodoUnits } from "./TodoUnits";

export default function SideTodo({ isOpen }: { isOpen: boolean }) {
  const { AllTodos } = useTodos();

  const todos: Todo[] = Array.isArray(AllTodos.data) ? AllTodos.data : [];

  const completedTodos = todos.filter((todo) => todo.completed);
  const activeTodos = todos.filter((todo) => todo.completed === false);

  return (
    <div className="flex-1 overflow-y-auto flex justify-between flex-col space-y-1 w-full">
      <TodoUnits isOpen={isOpen} type="Active" typeData={activeTodos} />
      <TodoUnits isOpen={isOpen} type="Completes" typeData={completedTodos} />
    </div>
  );
}
