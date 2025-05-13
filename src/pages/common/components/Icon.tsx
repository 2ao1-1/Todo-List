import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function Icon({
  handleSelectEmoji,
}: {
  handleSelectEmoji: (emoji: { native: string }) => void;
}) {
  return (
    <Picker
      data={data}
      onEmojiSelect={handleSelectEmoji}
      previewPosition="none"
      perLine={9}
      maxFrequentRows={0}
    />
  );
}
