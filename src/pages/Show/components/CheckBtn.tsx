import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { CheckboxProps } from "../types/ShowTodoType";

export function CheckBtn({ onCheck, completed }: CheckboxProps) {
  return (
    <button
      onClick={onCheck}
      className="mr-2 text-gray-600 hover:text-blue-500"
    >
      {completed ? (
        <MdCheckBox size={20} className="text-green-500" />
      ) : (
        <MdCheckBoxOutlineBlank size={20} />
      )}
    </button>
  );
}
