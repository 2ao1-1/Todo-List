import { FaSave } from "react-icons/fa";

export function SaveBtn({
  isEditing,
  onClick,
}: {
  isEditing?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="submit"
      disabled={isEditing}
      onClick={onClick}
      className="p-1 md:p-1.5 bg-accent/80 text-white rounded-full  hover:bg-accent flex items-center gap-1.5 text-sm md:text-base disabled:opacity-70"
    >
      <FaSave />
    </button>
  );
}
