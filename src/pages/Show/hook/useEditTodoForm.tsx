import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTodos } from "../../common/hook/useTodos";

export default function useEditTodoForm({
  todo,
  setIsEditingTodo,
}: {
  todo: { id: number; title: string; icon: string } | undefined;
  setIsEditingTodo: (value: boolean) => void;
}) {
  const { EditTodo } = useTodos();

  const isEditing = EditTodo.isPending;

  const {
    register: registerEditTodo,
    handleSubmit: handleSubmitEditTodo,
    reset: resetEditTodo,
    setValue: setEditTodoValue,
    watch: watchEditTodo,
  } = useForm<{
    editTodoTitle: string;
    editTodoIcon: string;
  }>();

  //   show new selected icon
  const editTodoIcon = watchEditTodo("editTodoIcon");

  //   set default value
  useEffect(() => {
    if (todo) {
      resetEditTodo({
        editTodoTitle: todo.title,
        editTodoIcon: todo.icon,
      });
    }
  }, [todo, resetEditTodo]);

  const onSubmitEditTodo: SubmitHandler<{
    editTodoTitle: string;
    editTodoIcon: string;
  }> = async (data) => {
    if (!todo || !data.editTodoTitle.trim()) return;

    const payload = {
      title: data.editTodoTitle,
      icon: data.editTodoIcon,
    };

    await EditTodo.mutateAsync({ id: todo.id, data: payload });
    setIsEditingTodo(false);
  };

  return {
    isEditing,

    registerEditTodo,
    handleSubmitEditTodo,
    resetEditTodo,
    setEditTodoValue,

    editTodoIcon,
    onSubmitEditTodo,
  };
}
