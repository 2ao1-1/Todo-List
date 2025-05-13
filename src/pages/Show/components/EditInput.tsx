import { UseFormRegister } from "react-hook-form";

export function EditInput({
  registerEditTodo,
}: {
  registerEditTodo: UseFormRegister<{
    editTodoTitle: string;
    editTodoIcon: string;
  }>;
}) {
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
