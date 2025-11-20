import { Todo } from "../../common/types";

export function TodoHeadBody({ todo }: { todo: Todo | undefined }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xl md:text-2xl">{todo?.icon || "❓"}</span>
      <h1 className="text-xl md:text-2xl font-bold">{todo?.title}</h1>
    </div>
  );
}
