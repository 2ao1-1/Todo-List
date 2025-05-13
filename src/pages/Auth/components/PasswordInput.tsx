import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface PasswordInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  isLoading: boolean;
}

export default function PasswordInput<T extends FieldValues>({
  register,
  isLoading,
}: PasswordInputProps<T>) {
  return (
    <input
      type="password"
      id="password"
      {...register("password" as Path<T>, {
        required: "Password required",
      })}
      placeholder="Type your password"
      disabled={isLoading}
      className="px-2 py-1 bg-main ring-0 outline-none"
    />
  );
}
