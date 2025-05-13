import { DeleteBtn } from "../../common/components/DeleteBtn";
import { Todo } from "../../common/types";

export default function DashboardTodoHead({ todo }: { todo: Todo }) {
  return (
    <div className="flex items-center justify-between mb-6 pt-4">
      <HeadBody icon={todo.icon} title={todo.title} />

      <DeleteBtn id={todo.id} title={todo.title} />
    </div>
  );
}

function HeadBody({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center min-w-0 gap-2">
      <span className="text-2xl text-gray-300">{icon || "📝"}</span>
      <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
    </div>
  );
}
