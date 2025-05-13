import Icon from "./Icon";

export default function IconPicker({
  handleShowIcon,
  handleSelectEmoji,
  showPicker,
  watch,
}: {
  handleShowIcon: () => void;
  handleSelectEmoji: (emoji: { native: string }) => void;
  showPicker: boolean;
  watch: (name: string) => string;
}) {
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
