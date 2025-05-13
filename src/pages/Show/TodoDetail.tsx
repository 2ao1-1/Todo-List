import { useParams } from "react-router-dom";
import { useTodos } from "../common/hook/useTodos";
import { useState } from "react";
import TodoHead from "./components/TodoHead";
import EditHeadControl from "./components/EditHeadControl";
import ProgressBar, { CompletedTask } from "../common/components/ProgressBar";
import AddTaskForm from "./components/AddTaskForm";
import ShortcutInfo from "./components/ShortcutInfo";

import TaskList from "./components/TaskList";
import useCancel from "../common/hook/useCancel";
import Loader from "../Loader";
import Error from "../Error";

export default function TodoDetail() {
  const { todoId } = useParams<{ todoId: string }>();

  const { GetTodoById } = useTodos();
  const handleClose = useCancel();

  const {
    data: todo,
    isLoading: todoLoading,
    isError: todoError,
  } = GetTodoById(Number(todoId));

  const [isEditingTodo, setIsEditingTodo] = useState(false);

  if (todoLoading) return <Loader />;
  if (todoError) return <Error message="error todo not found" />;

  return (
    <>
      <div
        onClick={handleClose}
        className="w-full flex flex-col justify-center items-center space-y-4 overflow-y-scroll h-screen z-50 bg-secondary/40 absolute top-0 p-4 inset-0 "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="space-y-4 p-4 m-4 md:p-6 w-3/4 mx-auto bg-main border shadow-md rounded-md overflow-auto"
        >
          <div className="border-b py-2">
            {/* Todo Header: todo title & todo controler */}
            {!isEditingTodo ? (
              <TodoHead setIsEditingTodo={setIsEditingTodo} todo={todo} />
            ) : (
              <EditHeadControl
                todo={todo}
                setIsEditingTodo={setIsEditingTodo}
              />
            )}
          </div>
          {/* todo progress bar */}
          <ProgressBar todo={todo} />

          <AddTaskForm todo={todo} />
          <TaskList todoId={Number(todoId)} />
          <CompletedTask todo={todo} />

          <ShortcutInfo />
        </div>
      </div>
    </>
  );
}
