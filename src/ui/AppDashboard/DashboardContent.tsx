import useDashBoard from "../../hooks/useDashBoard";
import { EmptyDashboard } from "./EmptyDash";
import { FooterDash } from "./FooterDash";
import { HeaderDash } from "./HeaderDash";
import { TodoList } from "./showAllTodos";
import { UserBadge } from "./UserBadge";

export default function DashboardContent({
  toggleSidebar,
  isOpen,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const {
    isOperBadge,
    setOpenBadge,
    todos,
    completedTodos,
    handleCreateTodo,
    handleShowingTodo,
    deleteTodo,
  } = useDashBoard();
  return (
    <div
      className={`flex-1 transition-all duration-300 bg-main ${
        isOpen ? "ml-64" : "sm:ml-16"
      }`}
    >
      <div className="flex sticky top-0 z-50 justify-between items-center px-4 py-3 border-b border-secondary/20 bg-main">
        <HeaderDash toToggleSidebar={toggleSidebar} isOpen={isOpen} />
        <UserBadge
          isOpen={isOperBadge}
          onToggle={() => setOpenBadge(!isOperBadge)}
        />
      </div>

      <div className="p-6 bg-main h-screen overflow-y-scroll">
        {todos.length === 0 ? (
          <EmptyDashboard onCreateTodo={handleCreateTodo} type="welcome" />
        ) : (
          <TodoList
            todos={todos}
            onTodoClick={handleShowingTodo}
            onTodoDelete={deleteTodo}
          />
        )}
      </div>

      <FooterDash
        onCreateTodo={handleCreateTodo}
        completedCount={completedTodos.length}
        totalCount={todos.length}
      />
    </div>
  );
}
