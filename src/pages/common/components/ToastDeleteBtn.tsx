import { FaTrash } from "react-icons/fa";

export function ToastDeleteBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded flex items-center justify-center gap-4"
      onClick={onClick}
    >
      <span className="text-xs">Delete</span>
      <FaTrash size={16} />
    </button>
  );
}
