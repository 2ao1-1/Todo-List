import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { OpenSideBtnProps } from "../types/CommonType";

export default function OpenSideBtn({
  toggleSidebar,
  isOpen,
  view,
}: OpenSideBtnProps) {
  if (view === "head")
    return (
      <button onClick={toggleSidebar} className="sm:hidden text-xl">
        {!isOpen && <GoSidebarCollapse />}
      </button>
    );

  if (view === "side")
    return (
      <div
        className={`border-b w-full py-2 ${!isOpen && "flex justify-center py-3"}`}
      >
        <button onClick={toggleSidebar} className="text-xl">
          {isOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </button>
      </div>
    );
}
