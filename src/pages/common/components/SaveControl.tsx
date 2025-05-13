import { CancelBtn } from "./CancelBtn";
import { SaveBtn } from "./SaveBtn";

export function SaveControl({
  saveOnClick,
  isEditing,
}: {
  saveOnClick?: () => void;
  isEditing?: boolean;
}) {
  return (
    <div className="flex gap-1 items-center">
      <SaveBtn isEditing={isEditing} onClick={saveOnClick} />

      <CancelBtn />
    </div>
  );
}
