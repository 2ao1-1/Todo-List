import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { IconProps } from "../types/CommonType";

export default function Icon({ handleSelectEmoji }: IconProps) {
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
