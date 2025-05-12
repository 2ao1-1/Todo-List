import { FaEdit } from "react-icons/fa";
import { ControlerProps } from "../types/CommonType";

export function EditBtn({ onClick }: ControlerProps) {
  const handleEdit = () => onClick(true);

  return (
    <button
      onClick={handleEdit}
      className="p-1  rounded-full  flex items-center "
    >
      <FaEdit />
    </button>
  );
}
