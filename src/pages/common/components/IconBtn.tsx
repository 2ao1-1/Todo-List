export function IconBtn({
  onClick,
  newIcon,
}: {
  onClick: () => void;
  newIcon: string | undefined;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center p-0.5 md:p-1.5 "
    >
      <span className="text-md md:text-base">{newIcon || "❓"}</span>
    </button>
  );
}
