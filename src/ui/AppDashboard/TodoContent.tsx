import { FC, MouseEventHandler } from "react";
import { BtnClicked } from "../BtnClicked";

interface TodoContentProps {
  icon: string;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * TodoContent Component
 * Displays the todo title and a control button (delete)
 */
export const TodoContent: FC<TodoContentProps> = ({ icon, title, onClick }) => {
  return (
    <div className="flex items-center justify-between gap-2 mb-3">
      {/* todo head */}
      <TodoHead icon={icon} title={title} />

      {/* todo control */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <BtnClicked onClick={onClick} title="Delete todo" icon="🗑️" />
      </div>
    </div>
  );
};

// TodoHead
const TodoHead = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{title}</span>
    </div>
  );
};
