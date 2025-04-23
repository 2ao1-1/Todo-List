import { memo } from "react";

interface TodoProgressBarProps {
  progress: number;
  onClose: () => void;
}

export const TodoProgressBar = memo(
  ({ progress, onClose }: TodoProgressBarProps) => (
    <div className="mb-6 w-full flex items-center gap-4">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
            progress === 100 ? "bg-accent" : "bg-accent/60"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <span
        className={`text-sm font-medium min-w-[40px] ${progress === 100 ? "text-accent" : ""}`}
      >
        {progress}%
      </span>
      <button
        onClick={onClose}
        className="text-secondary hover:text-primary transition-colors p-1"
        title="Close"
      >
        ✕
      </button>
    </div>
  )
);

TodoProgressBar.displayName = "TodoProgressBar";
