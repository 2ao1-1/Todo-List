import { UseFormRegister } from "react-hook-form";
import { RegisterFormData } from "../../Auth/hook/useRegister";

export default function NameInput({
  register,
  isLoading,
}: {
  register: UseFormRegister<RegisterFormData>;
  isLoading: boolean;
}) {
  return (
    <input
      id="name"
      {...register("name", {
        required: "Name required",
        minLength: {
          value: 2,
          message: "Name must be at least 2 characters",
        },
      })}
      placeholder="Type your name"
      disabled={isLoading}
      className="px-2 py-1 bg-main ring-0 outline-none"
    />
  );
}
