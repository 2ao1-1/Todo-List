import { NewTodoInputProps } from "../types/CommonType";

export default function NewTodoInput({ register }: NewTodoInputProps) {
  return (
    <div className="flex-1 relative ">
      <input
        type="text"
        {...register("title", {
          required: "Todo Title is required",
        })}
        required
        autoFocus
        placeholder="Enter todo title"
        className="peer w-full text-primary text-[0.9rem] bg-transparent px-2 py-[0.7em] border-0 border-b border-secondary focus:outline-none "
      />
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent transition-all duration-500 peer-focus:w-full"></span>
    </div>
  );
}
