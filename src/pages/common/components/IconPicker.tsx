import { IconPickerprops } from "../types/CommonType";
import Icon from "./Icon";

export default function IconPicker({
  handleShowIcon,
  handleSelectEmoji,
  showPicker,
  watch,
}: IconPickerprops) {
  return (
    <div className="">
      <button
        type="button"
        className="text-md p-2 border-b border-accent focus:outline-none"
        onClick={handleShowIcon}
      >
        {watch("icon")}
      </button>

      {showPicker && (
        <div className="absolute z-10">
          <Icon handleSelectEmoji={handleSelectEmoji} />
        </div>
      )}
    </div>
  );
}
