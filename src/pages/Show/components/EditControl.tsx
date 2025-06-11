import { FaEdit, FaTrash } from "react-icons/fa";

export default function EditControl({
  editOnClick,
  deleteOnClick,
}: {
  editOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={editOnClick}
        className="text-gray-500 hover:text-blue-500 text-xs  md:text-base"
      >
        <FaEdit />
      </button>
      <button
        onClick={deleteOnClick}
        className="text-gray-500 hover:text-red-500 text-xs md:text-base"
      >
        <FaTrash />
      </button>
    </div>
  );
}
