import { ControlerProps } from "../types/CommonType";
import { CancelBtn } from "./CancelBtn";
import { EditBtn } from "./EditBtn";

export function Controler({ onClick }: ControlerProps) {
  return (
    <div className="flex items-center gap-2">
      <EditBtn onClick={onClick} />
      <CancelBtn />
    </div>
  );
}
