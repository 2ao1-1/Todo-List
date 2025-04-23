import EmojiPicker from "emoji-picker-react";
import { memo, useEffect, useRef, useState } from "react";

interface EmojiSelectorProps {
  onSelect: (emoji: string) => void;
  currentEmoji: string;
}

/**
 * EmojiSelector Component
 * Floating emoji picker with improved UX
 */
const EmojiSelector = memo(({ onSelect, currentEmoji }: EmojiSelectorProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={pickerRef}>
      <button
        type="button"
        onClick={() => setShowPicker(!showPicker)}
        className="p-2 hover:bg-main/50 rounded-md transition-colors inline-flex items-center gap-2"
      >
        <span className="text-2xl">{currentEmoji}</span>
        <span className="text-xs text-secondary">▼</span>
      </button>

      {showPicker && (
        <div className="absolute z-50 mt-1 left-0">
          <div className="bg-card rounded-lg shadow-xl border border-secondary/20">
            <EmojiPicker
              onEmojiClick={(emojiData) => {
                onSelect(emojiData.emoji);
                setShowPicker(false);
              }}
              lazyLoadEmojis={true}
              height={350}
              width={300}
            />
          </div>
        </div>
      )}
    </div>
  );
});

EmojiSelector.displayName = "EmojiSelector";

export default EmojiSelector;
