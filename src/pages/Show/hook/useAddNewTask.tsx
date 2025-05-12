// import { SubmitHandler, useForm } from "react-hook-form";
// import useTask from "../../common/hook/useTask";
// import { Todo } from "../../Layout/TodoType";

// export interface NewTaskFormData {
//   newTaskText: string;
// }

// export default function useAddNewTask({ todo }: { todo: Todo }) {
//   const { AddTask } = useTask();
//   const Adding = AddTask.isPending;

//   const {
//     register: registerNewTask,
//     handleSubmit: handleSubmitNewTask,
//     reset: resetNewTask,
//     watch: watchNewTask,
//     setFocus: setNewTaskFocus,
//   } = useForm<NewTaskFormData>({ defaultValues: { newTaskText: "" } });

//   const newTaskText = watchNewTask("newTaskText");

//   const onSubmitNewTask: SubmitHandler<NewTaskFormData> = (data) => {
//     if (data.newTaskText.trim() && todo) {
//       AddTask.mutate({
//         todoId: todo.id,
//         taskData: {
//           text: data.newTaskText,
//           order: todo.tasks.length,
//         },
//       });
//       resetNewTask();
//     }
//   };

//   return {
//     Adding,
//     registerNewTask,
//     handleSubmitNewTask,
//     setNewTaskFocus,
//     newTaskText,
//     onSubmitNewTask,
//   };
// }

import { SubmitHandler, useForm } from "react-hook-form";
import useTask from "../../common/hook/useTask";
import { Todo } from "../../../types/TodoType";

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
