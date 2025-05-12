import { CompletedTask } from "../../common/components/ProgressBar";
import { ViewTodoBtn } from "../../common/components/ViewTodoBtn";
import { DashboardProps } from "../types/DashboardTypes";

export function DashboardTodoFooter({ todo }: DashboardProps) {
  return (
    <div className="border-t flex items-center justify-between py-2">
      <CompletedTask todo={todo} />

      <ViewTodoBtn />
    </div>
  );
}
