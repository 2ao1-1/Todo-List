import { CancelBtn } from "./CancelBtn";
import { ToastDeleteBtn } from "./ToastDeleteBtn";
import toast from "react-hot-toast";

export function ToastConfirm({
  t,
  message,
  onConfirm,
}: {
  t: { id: string };
  message: string;
  onConfirm: () => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[300px] flex flex-col gap-4">
      <div className="flex justify-end gap-2">
        <p className="text-sm text-black">{message}</p>
        <CancelBtn type="toast" />
      </div>
      <ToastDeleteBtn
        onClick={() => {
          onConfirm();
          toast.dismiss(t.id);
        }}
      />
    </div>
  );
}
