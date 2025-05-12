import { TaskItemProps } from "../types/ShowTodoType";

export default function TaskItem({
  children,
  completed,
  index,
  providedDraggable,
  snapshot,
  selectedTaskIndex,
  setSelectedTaskIndex,
}: TaskItemProps) {
  return (
    <li
      ref={providedDraggable.innerRef}
      {...providedDraggable.draggableProps}
      className={`p-3 border-b last:border-b-0 flex items-center transition-all
      ${completed ? "bg-gray-50" : "bg-white"} 
      ${selectedTaskIndex === index ? "bg-blue-50 border-blue-300 ring-1 ring-blue-200" : "border-gray-100"} 
      ${snapshot.isDragging ? "shadow-lg" : ""}`}
      onClick={() => setSelectedTaskIndex(index)}
    >
      {children}
    </li>
  );
}
