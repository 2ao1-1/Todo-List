import { DraggableProvided } from "@hello-pangea/dnd";
import { MdDragIndicator } from "react-icons/md";

export default function DragAndDropBtn({
  providedDraggable,
}: {
  providedDraggable: DraggableProvided;
}) {
  return (
    <div
      {...providedDraggable.dragHandleProps}
      className="mr-2 text-gray-400 cursor-grab hover:text-gray-600"
    >
      <MdDragIndicator size={20} />
    </div>
  );
}
