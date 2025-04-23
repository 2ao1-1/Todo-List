import { memo } from "react";
import useDashBoard from "../../hooks/useDashBoard";

/**
 * UserBadge Component
 * Displays user information and logout button
 */
export const UserBadge = memo(
  ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
    const { handleLogout } = useDashBoard();
    return (
      <div
        className={`relative flex justify-end gap-4 transition-all duration-900 ${
          isOpen ? "w-1/2" : "w-16 md:block"
        }`}
      >
        <button
          className={`p-1 w-8 h-8 rounded-full bg-secondary/50  hover:bg-secondary/70 `}
          onClick={onToggle}
        >
          🙎‍♂️
        </button>
        {isOpen && (
          // logout button
          <div>
            <button
              className="bg-accent text-card px-4 py-1 rounded-md hover:bg-accent/80 active:bg-accent/90 transition-colors w-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }
);

UserBadge.displayName = "UserBadge";
