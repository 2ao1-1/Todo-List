import { DraggableProvided, DraggableStateSnapshot } from "@hello-pangea/dnd";

export default function TaskItem({
  children,
  completed,
  index,
  providedDraggable,
  snapshot,
  selectedTaskIndex,
  setSelectedTaskIndex,
}: {
  children: React.ReactNode;
  completed: boolean;
  index: number;
  providedDraggable: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  selectedTaskIndex: number | null;
  setSelectedTaskIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <li
      ref={providedDraggable.innerRef}
      {...providedDraggable.draggableProps}
      className={`p-2 border-b-0 flex items-center transition-all
      ${completed ? "bg-gray-50" : "bg-white"} 
      ${selectedTaskIndex === index ? "bg-accent/5 border-accent/50 ring-1 ring-accent/50" : "border-gray-100"} 
      ${snapshot.isDragging ? "shadow-lg" : ""}`}
      onClick={() => setSelectedTaskIndex(index)}
    >
      {children}
    </li>
  );
}
