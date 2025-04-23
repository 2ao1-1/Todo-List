import useDashBoard from "../../hooks/useDashBoard";
import { BtnClicked } from "../BtnClicked";

export default function CompletedTodos({ isOpen }: { isOpen: boolean }) {
  const { completedTodos, handleShowingTodo, activeTodo, deleteTodo } =
    useDashBoard();
  return (
    <>
      {completedTodos.length > 0 && (
        <div className="border-t border-secondary/20">
          {/* header */}
          {isOpen && (
            <h2 className="px-4 py-2 text-sm font-medium text-secondary">
              Completed
            </h2>
          )}

          <div className="py-2">
            {completedTodos.map((todo) => (
              <div
                key={todo.id}
                onClick={() => handleShowingTodo(todo)}
                className={`flex items-center px-4 py-3 cursor-pointer transition-colors opacity-60 hover:opacity-100 ${
                  activeTodo === todo.id
                    ? "bg-accent/10 text-accent"
                    : "hover:bg-secondary/10"
                }`}
              >
                <div className="text-base mr-2">{todo.icon}</div>
                {isOpen && (
                  <div className="flex items-center justify-between w-full">
                    <span className="truncate flex items-center gap-2">
                      {todo.title}
                    </span>
                    <BtnClicked
                      title="Delete Btn"
                      icon="🗑️"
                      onClick={() => deleteTodo(todo.id)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
