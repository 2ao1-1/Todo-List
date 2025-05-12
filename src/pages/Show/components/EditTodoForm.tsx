import EditIconPicker from "../../common/components/EditIconPicker";
import { EditInput } from "./EditInput";
import { EditTodoFormProps } from "../types/ShowTodoType";

export function EditTodoForm({
  editTodoIcon,
  handleIconSelect,
  registerEditTodo,
}: EditTodoFormProps) {
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
