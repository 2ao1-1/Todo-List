import { Todo } from "../../common/types";

export function TodoHeadBody({ todo }: { todo: Todo }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-3xl">{todo?.icon || "📝"}</span>
      <h1 className="text-2xl font-bold">{todo?.title}</h1>
    </div>
  );
}
