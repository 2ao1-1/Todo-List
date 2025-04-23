import { memo } from "react";

export const TodoKeyboardShortcuts = memo(() => (
  <div className="mt-4 text-sm text-secondary">
    <p className="font-medium mb-1">Keyboard shortcuts:</p>
    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
      <li>
        Add task: <kbd className="px-1 bg-main rounded">Ctrl/Cmd + N</kbd>
      </li>
      <li>
        Navigate: <kbd className="px-1 bg-main rounded">↑/↓</kbd>
      </li>
      <li>
        Complete: <kbd className="px-1 bg-main rounded">Space</kbd>
      </li>
      <li>
        Edit: <kbd className="px-1 bg-main rounded">E/Enter</kbd>
      </li>
      <li>
        Delete: <kbd className="px-1 bg-main rounded">Delete</kbd>
      </li>
    </ul>
  </div>
));

TodoKeyboardShortcuts.displayName = "TodoKeyboardShortcuts";
