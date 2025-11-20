import { SubmitHandler, useForm } from "react-hook-form";
import useTask from "../../common/hook/useTask";
import { Todo } from "../../common/types";

export interface NewTaskFormData {
  newTaskText: string;
}

export default function useAddNewTask({ todo }: { todo: Todo | undefined }) {
  const { AddTask } = useTask();
  const isAdding = AddTask.isPending;

  const { register, handleSubmit, reset, watch, setFocus } =
    useForm<NewTaskFormData>({
      defaultValues: { newTaskText: "" },
      mode: "onChange",
    });

  const newTaskText = watch("newTaskText");

  const onSubmitNewTask: SubmitHandler<NewTaskFormData> = (data) => {
    if (!todo) return;

    if (data.newTaskText.trim()) {
      AddTask.mutate({
        todoId: todo.id,
        taskData: {
          text: data.newTaskText,
          order: todo?.tasks?.length || 0,
        },
      });
      reset();
    }
  };

  return {
    isAdding,
    registerNewTask: register,
    handleSubmitNewTask: handleSubmit,
    resetNewTask: reset,
    newTaskText,
    onSubmitNewTask,
    setNewTaskFocus: setFocus,
  };
}
