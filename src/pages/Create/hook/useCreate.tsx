import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../../common/hook/useTodos";

type FormInputs = {
  title: string;
  icon: string;
};

export default function useCreate() {
  const { CreateTodo } = useTodos();
  const navigate = useNavigate();
  const [showPicker, setShowPicker] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      icon: "📝",
    },
  });

  const onSubmit = async (data: FormInputs) => {
    try {
      const todoData = {
        title: data.title,
        icon: data.icon,
      };

      await CreateTodo.mutateAsync(todoData);
      reset();
      navigate("/app");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      console.error(
        "Error creating todo:",
        error.response?.data?.message || err
      );
    }
  };

  const handleShowIcon = () => setShowPicker((prev) => !prev);

  const handleSelectEmoji = (emoji: { native: string }) => {
    setValue("icon", emoji.native);
    setShowPicker(false);
  };

  return {
    showPicker,
    setShowPicker,
    handleShowIcon,
    handleSelectEmoji,
    register,
    handleSubmit,
    setValue,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  };
}
