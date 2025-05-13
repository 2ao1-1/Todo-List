import { CancelBtn } from "./CancelBtn";
import { EditBtn } from "./EditBtn";

export function Controler({ onClick }: { onClick: (value: boolean) => void }) {
  return (
    <div className="flex items-center gap-2">
      <EditBtn onClick={onClick} />
      <CancelBtn />
    </div>
  );
}
