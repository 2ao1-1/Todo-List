import { IconBtnProps } from "../types/CommonType";

export function IconBtn({ onClick, newIcon }: IconBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center p-1.5 border border-accent rounded-full bg-white hover:bg-gray-50"
    >
      <span className="text-xl">{newIcon || "📝"}</span>
    </button>
  );
}
