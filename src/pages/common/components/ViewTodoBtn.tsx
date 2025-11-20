import { GoArrowRight } from "react-icons/go";

export function ViewTodoBtn() {
  return (
    <span
      title="View todo details"
      className="text-accent/80 group-hover:text-accent group-hover:-rotate-45 transition-all duration-200 font-medium text-sm p-2 border border-accent/20 rounded-full"
    >
      <GoArrowRight width={28} />
    </span>
  );
}
