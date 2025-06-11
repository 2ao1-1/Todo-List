import { ReactElement } from "react";
import Error from "../../Error";

interface FormRowProps {
  label: string;
  children: ReactElement;
  error?: { message?: string };
}
export default function FormRow({ label, children, error }: FormRowProps) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-[6rem,1fr] items-center">
      <label
        htmlFor={label}
        className="text-xs md:text-base block font-medium mb-1"
      >
        {label}
      </label>
      {children}
      {error?.message && <Error message={error.message} />}
    </div>
  );
}
