import { memo } from "react";
import { Todo } from "../../types/TodoListTypes";
import EmojiSelector from "../EmojiPicker";

interface TodoHeaderProps {
  isEditing: boolean;
  editedTitle: string;
  editedIcon: string;
  currentTodo: Todo;
  onEdit: () => void;
  onSave: () => void;
  onDelete: () => void;
  onTitleChange: (value: string) => void;
  onIconSelect: (emoji: string) => void;
}

export const TodoHeader = memo(
  ({
    isEditing,
    editedTitle,
    editedIcon,
    currentTodo,
    onEdit,
    onSave,
    onDelete,
    onTitleChange,
    onIconSelect,
  }: TodoHeaderProps) => (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3 flex-1">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <EmojiSelector currentEmoji={editedIcon} onSelect={onIconSelect} />
          </div>
        ) : (
          <span className="text-2xl">{currentTodo.icon}</span>
        )}

        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => onTitleChange(e.target.value)}
            className="text-xl font-bold text-primary bg-transparent border-b border-accent/50 focus:border-accent outline-none px-1 flex-1"
            autoFocus
          />
        ) : (
          <h2 className="text-xl font-bold text-primary">
            {currentTodo.title}
          </h2>
        )}
      </div>
      <div className="flex items-center gap-2">
        {isEditing ? (
          <button
            onClick={onSave}
            className="text-accent hover:text-accent/80 transition-colors p-1"
            title="Save"
          >
            💾
          </button>
        ) : (
          <button
            onClick={onEdit}
            className="text-secondary hover:text-primary transition-colors p-1"
            title="Edit todo"
          >
            ✏️
          </button>
        )}
        <button
          onClick={onDelete}
          className="text-secondary hover:text-red-500 transition-colors p-1"
          title="Delete todo"
        >
          🗑️
        </button>
      </div>
    </div>
  )
);

TodoHeader.displayName = "TodoHeader";
