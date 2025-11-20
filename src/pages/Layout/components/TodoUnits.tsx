import { Todo } from "../../common/types";
import SideTodoItem from "./SideTodoItem";

export function TodoUnits({
  type,
  isOpen,
  typeData,
}: {
  type: string;
  isOpen: boolean;
  typeData: Todo[];
}) {
  return (
    <div className="">
      {isOpen && <h3 className="text-sm capitalize text-secondary">{type}</h3>}
      <ul
        className={`${type === "Active" ? "space-y-1" : "grayscale space-y-1 mb-4"}`}
      >
        {typeData?.map((item) => (
          <SideTodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            icon={item.icon}
            isOpen={isOpen}
            type={type}
          />
        ))}
      </ul>
    </div>
  );
}
