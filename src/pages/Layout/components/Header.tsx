import { useState } from "react";
import { useAuth } from "../../Auth/context/AuthContext";
import UserBadge from "./UserBadge";
import LogoutBtn from "./LogoutBtn";
import OpenSideBtn from "../../common/components/OpenSideBtn";

export default function Header({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const { user, logout } = useAuth();
  const [openBadge, setOpenBadge] = useState(false);

  const handleUserbadge = () => {
    setOpenBadge(!openBadge);
  };

  return (
    <header className="flex items-center justify-between p-4 sticky top-0 bg-main border-b z-50 transition-all duration-300">
      {/* button on open sidebar in mobile view */}
      <OpenSideBtn toggleSidebar={toggleSidebar} isOpen={isOpen} view="head" />

      {/* app name */}
      <h1 className="text-sm md:text-lg font-bold">🧭 My Dashboard</h1>

      {/* user badge & user name */}
      <div className="relative">
        <UserBadge handleUserbadge={handleUserbadge} userName={user?.name} />

        {openBadge && (
          <LogoutBtn handleUserbadge={handleUserbadge} logout={logout} />
        )}
      </div>
    </header>
  );
}
