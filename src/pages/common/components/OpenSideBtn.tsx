import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

export default function OpenSideBtn({
  toggleSidebar,
  isOpen,
  view,
}: {
  view: "head" | "side";
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  if (view === "head")
    return (
      <button
        onClick={toggleSidebar}
        className="sm:hidden text-sm md:text-base"
      >
        {!isOpen && <GoSidebarCollapse />}
      </button>
    );

  if (view === "side")
    return (
      <div
        className={`border-b w-full py-2 ${!isOpen && "flex justify-center py-3"}`}
      >
        <button onClick={toggleSidebar} className=" text-sm md:text-base ">
          {isOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </button>
      </div>
    );
}
