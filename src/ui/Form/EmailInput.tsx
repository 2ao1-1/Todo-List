import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface EmailInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  isLoading: boolean;
}

export default function EmailInput<T extends FieldValues>({
  register,
  isLoading,
}: EmailInputProps<T>) {
  return (
    <input
      type="email"
      id="email"
      {...register("email" as Path<T>, {
        required: "Email required",
        pattern: {
          value: /^\S+@\S+\.\S+$/,
          message: "Invalid email format",
        },
      })}
      placeholder="Type your email"
      disabled={isLoading}
      className="px-2 py-1 bg-main ring-0 outline-none"
    />
  );
}
