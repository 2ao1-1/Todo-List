export default function ShortcutInfo() {
  return (
    <div className="mt-8 p-3 rounded-md text-xs text-primary/80">
      <h3 className="text-sm font-medium mb-1.5 ">Keyboard Shortcuts:</h3>
      <ul className="list-disc list-inside space-y-0.5 md:columns-2">
        <li>Ctrl/Cmd + N: Focus 'Add new task' input</li>
        <li>Arrow Up/Down: Navigate tasks (when not editing)</li>
        <li>Spacebar: Toggle selected task completion</li>
        <li>E or Enter: Edit selected task</li>
        <li>Delete: Delete selected task</li>
      </ul>
    </div>
  );
}
