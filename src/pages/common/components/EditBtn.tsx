import { FaEdit } from "react-icons/fa";

export function EditBtn({ onClick }: { onClick: (value: boolean) => void }) {
  const handleEdit = () => onClick(true);

  return (
    <button
      onClick={handleEdit}
      className="p-1 rounded-full flex items-center text-xs md:text-base"
    >
      <FaEdit />
    </button>
  );
}
