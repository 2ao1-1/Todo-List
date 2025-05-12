import { useTodos } from "../common/hook/useTodos";
import NewTodo from "../common/components/NewTodoBtn";
import NoTodo from "./components/NoTodo";
import TodoList from "./components/TodoList";
import Loader from "../Loader";
import Error from "../Error";

export default function TodosView() {
  const { AllTodos } = useTodos();

  if (AllTodos.isLoading) return <Loader />;
  if (AllTodos.isError) return <Error message={AllTodos?.error?.message} />;

  return (
    <div className="w-full mx-auto p-4 md:p-6 bg-main min-h-screen">
      {AllTodos.data?.length === 0 ? (
        <NoTodo />
      ) : (
        <>
          <div className="absolute bottom-4 right-4 mb-8 text-center">
            <NewTodo isOpen={true} type="dashboard" />
          </div>
          <TodoList />
        </>
      )}
    </div>
  );
}
