import { FaSave } from "react-icons/fa";
import { SaveBtnProps } from "../types/CommonType";

export function SaveBtn({ isEditing, onClick }: SaveBtnProps) {
  return (
    <button
      type="submit"
      disabled={isEditing}
      onClick={onClick}
      className="p-1.5 bg-accent/80 text-white rounded-full  hover:bg-accent flex items-center gap-1.5 text-sm disabled:opacity-70"
    >
      <FaSave />
    </button>
  );
}
