import SidebarBtns from "../../common/components/SidebarBtns";
import SideTodo from "./SideTodo";

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <aside
      className={`${
        isOpen ? "w-48" : "sm:w-14 hidden"
      } bg-main text-primary border-r h-screen transition-all duration-300 flex flex-col sm:block justify-between px-2 z-10`}
    >
      {/* Toggle Button Header */}
      <SidebarBtns toggleSidebar={toggleSidebar} isOpen={isOpen}>
        {/* Todo List Scrollable Section */}
        <SideTodo isOpen={isOpen} />
      </SidebarBtns>
    </aside>
  );
}
