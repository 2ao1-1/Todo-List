import { FC } from "react";

interface HeaderDashProps {
  toToggleSidebar: () => void;
  isOpen: boolean;
}

/**
 * HeaderDash Component
 * Displays a toggle sidebar button and user's todo list title
 */
export const HeaderDash: FC<HeaderDashProps> = ({
  toToggleSidebar,
  isOpen,
}) => {
  // Retrieve user name from localStorage/sessionStorage (fallback to "User")
  const userName =
    localStorage.getItem("userName") ||
    sessionStorage.getItem("userName") ||
    "User";

  return (
    <div className="sticky top-0 flex items-center gap-4">
      {/* Sidebar toggle button */}
      <button
        onClick={toToggleSidebar}
        className="p-1 w-8 h-8 rounded-full bg-secondary/50 hover:bg-secondary/70"
        title="Toggle Sidebar"
      >
        {isOpen ? "📂" : "📁"}
      </button>

      {/* Display user's name */}
      <span className="text-sm md:text-xl font-semibold text-center truncate">
        {userName.toUpperCase()}'s Todo List
      </span>
    </div>
  );
};
