import { useEffect, useRef, useState } from "react";

export default function useIconEdit() {
  const [showIconPicker, setShowIconPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement | null>(null);

  const handleShowIcon = () => setShowIconPicker((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowIconPicker(false);
      }
    };

    if (showIconPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showIconPicker]);

  return {
    showIconPicker,
    setShowIconPicker,
    handleShowIcon,
    pickerRef,
  };
}
