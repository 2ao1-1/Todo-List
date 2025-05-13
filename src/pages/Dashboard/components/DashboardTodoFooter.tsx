import { CompletedTask } from "../../common/components/ProgressBar";
import { ViewTodoBtn } from "../../common/components/ViewTodoBtn";
import { Todo } from "../../common/types";

export function DashboardTodoFooter({ todo }: { todo: Todo | undefined }) {
  return (
    <div className="border-t flex items-center justify-between py-2">
      <CompletedTask todo={todo} />

      <ViewTodoBtn />
    </div>
  );
}
