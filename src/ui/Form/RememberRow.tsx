import { Dispatch, SetStateAction } from "react";

interface RememberRowProps {
  isLoading: boolean;
  remember: boolean;
  setRemember: Dispatch<SetStateAction<boolean>>;
}

export default function RememberRow({
  isLoading,
  remember,
  setRemember,
}: RememberRowProps) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <input
        type="checkbox"
        id="remember"
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
        disabled={isLoading}
        className="h-4 w-4 text-accent rounded border-gray-300 focus:ring-accent disabled:opacity-50 bg-accent"
      />
      <label htmlFor="remember" className="text-sm text-gray-700">
        Remember Me
      </label>
    </div>
  );
}
