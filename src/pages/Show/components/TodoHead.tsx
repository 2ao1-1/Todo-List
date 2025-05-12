import { Controler } from "../../common/components/Controler";
import { TodoHeadProps } from "../types/ShowTodoType";
import { TodoHeadBody } from "./TodoHeadBody";

export default function TodoHead({ todo, setIsEditingTodo }: TodoHeadProps) {
  return (
    <div className="flex justify-between items-center flex-grow">
      {/* todo header */}
      <TodoHeadBody todo={todo} />

      {/* todo controler */}
      <Controler onClick={setIsEditingTodo} />
    </div>
  );
}
