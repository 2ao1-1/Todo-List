import { useState } from "react";

export default function useIconEdit() {
  const [showIconPicker, setShowIconPicker] = useState(false);
  const handleShowIcon = () => setShowIconPicker(!showIconPicker);

  return {
    showIconPicker,
    setShowIconPicker,
    handleShowIcon,
  };
}
