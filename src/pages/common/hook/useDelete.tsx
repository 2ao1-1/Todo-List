import toast from "react-hot-toast";
import { useTodos } from "./useTodos";
import { ToastConfirm } from "../components/ToastConfirm";

export default function useDelete() {
  const { DeleteTodo } = useTodos();

  const handleDeleteTodo = (id: number, title: string) => {
    toast.custom((t) => (
      <ToastConfirm
        t={t}
        message={`Are you sure you want to delete "${title}"?`}
        onConfirm={() => DeleteTodo.mutate(id)}
      />
    ));
  };
  return { handleDeleteTodo };
}
