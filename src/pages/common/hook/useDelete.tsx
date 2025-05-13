import toast from "react-hot-toast";
import { useTodos } from "./useTodos";
import { CancelBtn } from "../components/CancelBtn";
import { ToastDeleteBtn } from "../components/ToastDeleteBtn";

export default function useDelete() {
  const { DeleteTodo } = useTodos();

  const handleDeleteTodo = (id: number, title: string) => {
    toast.custom((t) => (
      <div className="bg-white rounded-lg shadow-lg p-4 w-[300px] flex flex-col gap-8">
        <p className="text-black">{`Are you sure you want to delete ${title}?`}</p>
        <div className="flex justify-between gap-2">
          <ToastDeleteBtn
            onClick={() => {
              DeleteTodo.mutate(id);
              toast.dismiss(t.id);
            }}
          />
          <CancelBtn onClick={() => toast.dismiss(t.id)} type="toast" />
        </div>
      </div>
    ));
  };
  return { handleDeleteTodo };
}
