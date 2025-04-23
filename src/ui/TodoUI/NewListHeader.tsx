import { BtnClicked } from "../BtnClicked";

interface NewListHeaderProps {
  onClose: () => void;
}

export function NewListHeader({ onClose }: NewListHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold text-primary">Create New List</h2>
      <BtnClicked onClick={onClose} title="Close" icon="✕" />
    </div>
  );
}
