import { FaTrash } from "react-icons/fa";
import useDelete from "../hook/useDelete";
import { deleteBtbProps } from "../types/CommonType";

export function DeleteBtn({ id, title }: deleteBtbProps) {
  const { handleDeleteTodo } = useDelete();

  const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleDeleteTodo(id, title);
  };

  return (
    <button
      onClick={onDelete}
      title="Delete"
      className="text-gray-400 hover:text-red-500 p-1 rounded-full hover:bg-red-100 transition-colors duration-150"
      aria-label="Delete todo"
    >
      <FaTrash size={16} />
    </button>
  );
}
