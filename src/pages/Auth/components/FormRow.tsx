import Error from "../../Error";
import { FormRowProps } from "../types/componentsType";

export default function FormRow({ label, children, error }: FormRowProps) {
  return (
    <div className="mb-4 grid grid-cols-[6rem_1fr] items-center">
      {label && (
        <label htmlFor={children.props.id} className="block font-medium mb-1">
          {label}
        </label>
      )}
      {children}
      {error?.message && <Error message={error.message} />}
    </div>
  );
}
