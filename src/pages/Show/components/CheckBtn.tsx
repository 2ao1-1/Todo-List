import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export function CheckBtn({
  onCheck,
  completed,
}: {
  onCheck: (e: React.MouseEvent<HTMLButtonElement>) => void;
  completed: boolean;
}) {
  return (
    <button
      onClick={onCheck}
      className="mr-2 text-gray-600 hover:text-blue-500 h-4 w-4 md:h-5 md:w-5 cursor-pointer"
    >
      {completed ? (
        <MdCheckBox className="text-green-500" />
      ) : (
        <MdCheckBoxOutlineBlank />
      )}
    </button>
  );
}
