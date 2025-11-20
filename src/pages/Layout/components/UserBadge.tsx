import { GoPerson } from "react-icons/go";

export default function UserBadge({
  handleUserbadge,
  userName,
}: {
  handleUserbadge: () => void;
  userName: string | undefined;
}) {
  return (
    <div
      className="cursor-pointer flex items-center gap-2"
      onClick={handleUserbadge}
    >
      {/* badge icon */}
      <span className="p-1 md:p-2">
        <GoPerson />
      </span>

      {/* user name */}
      <span className="hidden md:block text-sm md:text-xl capitalize">
        {userName}
      </span>
    </div>
  );
}
