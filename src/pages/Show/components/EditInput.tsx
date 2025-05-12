import { EditInputProps } from "../types/ShowTodoType";

export function EditInput({ registerEditTodo }: EditInputProps) {
  return (
    <>
      <input
        type="text"
        {...registerEditTodo("editTodoTitle", { required: true })}
        className="flex-grow border-b border-accent px-2 py-1.5 focus:outline-none focus:ring-none bg-card"
        placeholder="Todo list title"
      />
      <input type="hidden" {...registerEditTodo("editTodoIcon")} />
    </>
  );
}
