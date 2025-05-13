import { ReactElement } from "react";
import Error from "../../Error";

interface FormRowProps {
  label: string;
  children: ReactElement;
  error?: { message?: string };
}
export default function FormRow({ label, children, error }: FormRowProps) {
  return (
    <div className="mb-4 grid grid-cols-[6rem_1fr] items-center">
      <label htmlFor={label} className="block font-medium mb-1">
        {label}
      </label>
      {children}
      {error?.message && <Error message={error.message} />}
    </div>
  );
}
