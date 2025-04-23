import useDashBoard from "../../hooks/useDashBoard";
import { ActiveTodos } from "./ActiveTodos";
import CompletedTodos from "./CompletedTodos";
import CreateBtn from "./CreateBtn";

export default function SideBar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div
      className={`bg-main text-primary transition-all duration-300 flex flex-col fixed h-full z-10 border-r  ${
        isOpen ? "w-64" : "w-16 hidden sm:block"
      }`}
    >
      {/* Sidebar header */}
      <SidebarHead isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Todos list */}
      <div className="flex-grow overflow-y-auto flex flex-col ">
        {/* Active Todos */}
        <ActiveTodos isOpen={isOpen} />

        <CompletedTodos isOpen={isOpen} />

        {/* Add new todo button */}
        <div className="bg-main">
          <CreateBtn isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

const SidebarHead = ({
  toggleSidebar,
  isOpen,
}: {
  toggleSidebar: () => void;
  isOpen: boolean;
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-secondary/50 sticky top-0">
      <button
        onClick={toggleSidebar}
        className="p-1 hover:bg-secondary/20 rounded-full transition-colors"
        title={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? "📂" : "📁"}
      </button>
      {isOpen && <h1 className="text-base font-bold">To-Do</h1>}
    </div>
  );
};
