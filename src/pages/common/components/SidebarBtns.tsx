import OpenSideBtn from "./OpenSideBtn";
import NewTodoBtn from "./NewTodoBtn";

export default function SidebarBtns({
  toggleSidebar,
  isOpen,
  children,
}: {
  toggleSidebar: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between h-full w-full bg-main py-2 px-1 gap-2 items-center">
      {/* open sidebar button */}
      <OpenSideBtn toggleSidebar={toggleSidebar} isOpen={isOpen} view="side" />

      {/* todo lists : active & completed */}
      {children}

      {/* add new todo */}
      <NewTodoBtn isOpen={isOpen} />
    </div>
  );
}
