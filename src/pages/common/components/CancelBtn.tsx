import { GoX } from "react-icons/go";
import useCancel from "../hook/useCancel";
import { CancelBtnProps } from "../types/CommonType";

export function CancelBtn({ type, onClick }: CancelBtnProps) {
  const handleClose = useCancel();
  return (
    <button
      type="button"
      title="Cancel"
      onClick={handleClose || onClick}
      className={`p-1.5 bg-secondary/80 text-white  hover:bg-secondary flex items-center gap-1.5 
        ${type === "toast" ? "rounded" : "rounded-full"}`}
    >
      {type === "toast" && "Cancel"}
      <GoX />
    </button>
  );
}
