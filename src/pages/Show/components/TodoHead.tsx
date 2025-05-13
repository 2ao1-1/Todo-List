import { Controler } from "../../common/components/Controler";
import { Todo } from "../../common/types";
import { TodoHeadBody } from "./TodoHeadBody";

export default function TodoHead({
  todo,
  setIsEditingTodo,
}: {
  todo: Todo | undefined;
  setIsEditingTodo: (value: boolean) => void;
}) {
  return (
    <div className="flex justify-between items-center flex-grow">
      {/* todo header */}
      <TodoHeadBody todo={todo} />

      {/* todo controler */}
      <Controler onClick={setIsEditingTodo} />
    </div>
  );
}
