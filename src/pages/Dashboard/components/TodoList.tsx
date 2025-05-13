import { Link } from "react-router-dom";
import { useTodos } from "../../common/hook/useTodos";
import DashboardTodoHead from "./DashboardTodoHead";
import { DashboardTodoFooter } from "./DashboardTodoFooter";
import { CompletedTodo } from "./CompletedTodo";
import { Todo } from "../../common/types";
import ProgressBar from "../../common/components/ProgressBar";

export default function TodoList() {
  const { AllTodos } = useTodos();
  console.log(AllTodos.data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {AllTodos.data?.map((todo: Todo) => (
        <Link
          key={todo.id}
          to={`/app/${todo.id}`}
          className="block group"
          title={todo.title}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col px-4 relative">
            <DashboardTodoHead todo={todo} />

            <ProgressBar todo={todo} />

            <DashboardTodoFooter todo={todo} />

            {todo.completed && <CompletedTodo />}
          </div>
        </Link>
      ))}
    </div>
  );
}
