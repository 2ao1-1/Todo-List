import { FaEdit, FaTrash } from "react-icons/fa";
import { EditControlProps } from "../types/ShowTodoType";

export default function EditControl({
  editOnClick,
  deleteOnClick,
}: EditControlProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={editOnClick}
        className="text-gray-500 hover:text-blue-500"
      >
        <FaEdit size={14} />
      </button>
      <button
        onClick={deleteOnClick}
        className="text-gray-500 hover:text-red-500"
      >
        <FaTrash size={14} />
      </button>
    </div>
  );
}
