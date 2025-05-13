import EditIconPicker from "../../common/components/EditIconPicker";
import { EditInput } from "./EditInput";
import { UseFormRegister } from "react-hook-form";

export function EditTodoForm({
  editTodoIcon,
  handleIconSelect,
  registerEditTodo,
}: {
  editTodoIcon: string | undefined;
  handleIconSelect: (emoji: { native: string }) => void;
  registerEditTodo: UseFormRegister<{
    editTodoTitle: string;
    editTodoIcon: string;
  }>;
}) {
  return (
    <div className="flex-1 flex items-center gap-3">
      <EditIconPicker
        handleIconSelect={handleIconSelect}
        editTodoIcon={editTodoIcon}
      />

      <EditInput registerEditTodo={registerEditTodo} />
    </div>
  );
}
