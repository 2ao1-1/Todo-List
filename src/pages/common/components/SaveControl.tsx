import { SaveControlProps } from "../types/CommonType";
import { CancelBtn } from "./CancelBtn";
import { SaveBtn } from "./SaveBtn";

export function SaveControl({ saveOnClick, isEditing }: SaveControlProps) {
  return (
    <div className="flex gap-1 items-center">
      <SaveBtn isEditing={isEditing} onClick={saveOnClick} />

      <CancelBtn />
    </div>
  );
}
