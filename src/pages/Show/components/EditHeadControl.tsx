import { SaveControl } from "../../common/components/SaveControl";
import UseEditHeadControl from "../hook/useEditHeadControl";
import { EditHeadControlProps } from "../types/ShowTodoType";
import { EditTodoForm } from "./EditTodoForm";

export default function EditHeadControl({
  todo,
  setIsEditingTodo,
}: EditHeadControlProps) {
  const {
    isEditing,
    registerEditTodo,
    handleSubmitEditTodo,

    editTodoIcon,
    onSubmitEditTodo,
    handleIconSelect,
  } = UseEditHeadControl({ todo, setIsEditingTodo });

  return (
    <div className="flex-grow">
      <form
        onSubmit={handleSubmitEditTodo(onSubmitEditTodo)}
        className="flex items-center gap-2"
      >
        <EditTodoForm
          editTodoIcon={editTodoIcon}
          handleIconSelect={handleIconSelect}
          registerEditTodo={registerEditTodo}
        />
        <SaveControl isEditing={isEditing} />
      </form>
    </div>
  );
}
