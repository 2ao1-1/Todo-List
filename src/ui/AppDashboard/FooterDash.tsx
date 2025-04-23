import { FC } from "react";
import { EmptyDashboard } from "./EmptyDash";

interface FooterDashProps {
  onCreateTodo: () => void;
  completedCount: number;
  totalCount: number;
}

/**
 * FooterDash Component
 * Shows the EmptyDashboard button and completion status
 * Now hides the status when there are no todos
 */
export const FooterDash: FC<FooterDashProps> = ({
  onCreateTodo,
  completedCount,
  totalCount,
}) => {
  return (
    <div className="sticky bottom-0 z-50">
      <EmptyDashboard onCreateTodo={onCreateTodo} type="app" />

      {/* Only show completion status when there are todos */}
      {totalCount > 0 && (
        <p className="md:text-center bg-main text-secondary p-4 md:pb-8 sticky bottom-0 w-full text-sm md:text-base flex justify-center items-center gap-2">
          You have {completedCount} / {totalCount} todos completed
        </p>
      )}
    </div>
  );
};
