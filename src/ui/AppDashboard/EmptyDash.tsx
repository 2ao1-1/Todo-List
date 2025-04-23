import { memo } from "react";

/**
 * EmptyDashboard Component
 * Displays a centered create button when no todos exist
 */
export const EmptyDashboard = memo(
  ({ onCreateTodo, type }: { onCreateTodo: () => void; type: string }) => {
    // Define styles based on the type prop
    const style = {
      welcome:
        "flex flex-col items-center justify-center h-[calc(100vh-200px)]",
      app: "flex justify-end items-center bottom-16 right-10 absolute",
    };

    return (
      <div className={`${style[type]}`}>
        {/* Button to create a new todo */}
        <button
          onClick={onCreateTodo}
          className="bg-accent text-card py-3 px-5 hover:bg-accent/80 rounded-full transition-colors flex items-center text-xl font-bold duration-200 z-30"
        >
          <span>+</span>
        </button>

        {type === "welcome" && (
          <p className="text-secondary mt-8">
            No todos yet. Create your first todo!
          </p>
        )}
      </div>
    );
  }
);

EmptyDashboard.displayName = "EmptyDashboard";
