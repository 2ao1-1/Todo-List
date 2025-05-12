import { NameInputProps } from "../types/CreateTypes";

export default function NameInput({ register, isLoading }: NameInputProps) {
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
