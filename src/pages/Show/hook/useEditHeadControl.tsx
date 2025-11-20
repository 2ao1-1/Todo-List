import useEditTodoForm from "./useEditTodoForm";
import useIconEdit from "./useIconEdit";

export default function UseEditHeadControl({
  todo,
  setIsEditingTodo,
}: {
  todo: { id: number; title: string; icon: string } | undefined;
  setIsEditingTodo: (value: boolean) => void;
}) {
  const {
    isEditing,
    registerEditTodo,
    handleSubmitEditTodo,
    resetEditTodo,
    setEditTodoValue,

    editTodoIcon,
    onSubmitEditTodo,
  } = useEditTodoForm({ todo, setIsEditingTodo });

  const { setShowIconPicker } = useIconEdit();

  const handleIconSelect = (emoji: { native: string }) => {
    setEditTodoValue("editTodoIcon", emoji.native);
    setShowIconPicker(false);
  };

  const handleCancelEditing = () => {
    setIsEditingTodo(false);
    if (todo) {
      resetEditTodo({
        editTodoTitle: todo.title,
        editTodoIcon: todo.icon,
      });
    }
  };

  return {
    isEditing,
    registerEditTodo,
    handleSubmitEditTodo,
    resetEditTodo,
    setEditTodoValue,

    editTodoIcon,
    onSubmitEditTodo,
    handleIconSelect,
    handleCancelEditing,
  };
}
