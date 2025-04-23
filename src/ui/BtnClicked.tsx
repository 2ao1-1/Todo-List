interface BtnClickedProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  icon: string;
}
/**
 * Reusable Icon Button Component
 * - Stops event propagation
 * - Shows tooltip title
 * - Supports dynamic icons
 */
export const BtnClicked = ({ onClick, title, icon }: BtnClickedProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      className="text-secondary hover:text-primary transition-colors p-1"
      title={title}
    >
      {icon}
    </button>
  );
};
