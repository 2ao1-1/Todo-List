import useIconEdit from "../hook/useIconEdit";
import Icon from "./Icon";
import { IconBtn } from "./IconBtn";

export default function EditIconPicker({
  handleIconSelect,
  editTodoIcon,
}: {
  handleIconSelect: (emoji: { native: string }) => void;
  editTodoIcon: string | undefined;
}) {
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
