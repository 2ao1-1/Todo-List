import useCreate from "../hook/useCreate";
import IconPicker from "../../common/components/IconPicker";
import CreateBtn from "../../common/components/CreateBtn";
import NewTodoInput from "../../common/components/NewTodoInput";

export default function CreateForm() {
  const {
    showPicker,
    handleShowIcon,
    handleSelectEmoji,
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  } = useCreate();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex gap-2 justify-center items-center">
        <IconPicker
          handleShowIcon={handleShowIcon}
          handleSelectEmoji={handleSelectEmoji}
          showPicker={showPicker}
          watch={watch}
        />

        <NewTodoInput register={register} />
      </div>
      {errors.title && (
        <p className="text-sm text-red-500">{errors.title.message}</p>
      )}

      <div className="flex gap-3 mt-4">
        <CreateBtn isSubmitting={isSubmitting} />
      </div>
    </form>
  );
}
