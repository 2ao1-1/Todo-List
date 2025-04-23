import useDashBoard from "../../hooks/useDashBoard";

export const ActiveTodos = ({ isOpen }: { isOpen: boolean }) => {
  const { activeTodo, activeTodos, handleShowingTodo, deleteTodo } =
    useDashBoard();
  return (
    <div className="flex-1">
      {isOpen && (
        <h2 className="px-4 py-2 text-sm font-medium text-secondary">Active</h2>
      )}
      <div className="py-2">
        {activeTodos.map((todo) => (
          <div
            key={todo.id}
            onClick={() => handleShowingTodo(todo)}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors justify-between 
                      ${
                        activeTodo === todo.id
                          ? "bg-accent/10 text-accent"
                          : "hover:bg-secondary/10"
                      }
                  `}
          >
            <div className="text-base mr-2">{todo.icon}</div>
            {isOpen && (
              <>
                <span className="truncate flex items-center gap-2">
                  {todo.title}
                </span>
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShowingTodo(todo);
                    }}
                    className="text-secondary hover:text-primary transition-colors p-1"
                    title="Edit todo"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTodo(todo.id);
                    }}
                    className="text-secondary hover:text-red-500 transition-colors p-1"
                    title="Delete todo"
                  >
                    🗑️
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
