import useIconEdit from "../hook/useIconEdit";
import { EditIconProps } from "../types/CommonType";
import Icon from "./Icon";
import { IconBtn } from "./IconBtn";

export default function EditIconPicker({
  handleIconSelect,
  editTodoIcon,
}: EditIconProps) {
  const { showIconPicker, handleShowIcon } = useIconEdit();

  return (
    <>
      {/* show icon */}
      <IconBtn onClick={handleShowIcon} newIcon={editTodoIcon} />

      {/* show icon picker */}
      {showIconPicker && (
        <div className="absolute z-20 bg-white rounded-full">
          <Icon handleSelectEmoji={handleIconSelect} />
        </div>
      )}
    </>
  );
}
