import { GoX } from "react-icons/go";
import { logoutType } from "../types/LayoutTypes";

export default function LogoutBtn({ logout, handleUserbadge }: logoutType) {
  return (
    <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg p-2 flex gap-2 items-center">
      {/* logout btn */}
      <button
        onClick={logout}
        className="w-full text-left px-4 py-2 hover:bg-main"
      >
        Logout
      </button>

      {/* close btn */}
      <button className="p-1 bg-main rounded-full" onClick={handleUserbadge}>
        <GoX />
      </button>
    </div>
  );
}
