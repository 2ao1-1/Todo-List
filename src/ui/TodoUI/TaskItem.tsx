import { memo } from "react";
import { Task } from "../../types/TodoListTypes";
import { Draggable } from "@hello-pangea/dnd";
import { BtnClicked } from "../BtnClicked";

interface TaskItemProps {
  task: Task;
  index: number;
  selectedTask: number | null;
  editingTaskId: number | null;
  editingTaskText: string;
  onToggleTask: (taskId: number) => void;
  onEditTask: (taskId: number) => void;
  onEditTaskII: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onEditingTextChange: (text: string) => void;
  onEditingKeyDown: (e: React.KeyboardEvent, taskId: number) => void;
  onCancelEditing: () => void;
  onSelect: (taskId: number) => void;
}

/**
 * TaskItem Component
 * Individual task item with drag and drop, edit, and delete functionality
 */
const TaskItem = memo(
  ({
    task,
    index,
    selectedTask,
    editingTaskId,
    editingTaskText,
    onToggleTask,
    onEditTask,
    onEditTaskII,
    onDeleteTask,
    onEditingTextChange,
    onEditingKeyDown,
    onCancelEditing,
    onSelect,
  }: TaskItemProps) => (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`group flex items-center gap-2 p-2 rounded bg-main/50 ${
            selectedTask === task.id ? "ring-2 ring-accent" : ""
          }`}
          onClick={() => {
            if (editingTaskId !== task.id) {
              onSelect(task.id);
            }
          }}
        >
          {editingTaskId === task.id ? (
            <div className="flex items-center gap-2 flex-1">
              {/* check box */}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
                className="rounded border-secondary"
              />

              <input
                type="text"
                value={editingTaskText}
                onChange={(e) => onEditingTextChange(e.target.value)}
                onKeyDown={(e) => onEditingKeyDown(e, task.id)}
                className="flex-1 bg-transparent border-b border-accent/50 focus:border-accent outline-none px-1"
                autoFocus
              />

              <div className="flex items-center gap-1">
                <BtnClicked
                  title="Save"
                  onClick={() => onEditTask(task.id)}
                  icon="💾"
                />

                <BtnClicked title="Cancel" onClick={onCancelEditing} icon="✕" />
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleTask(task.id)}
                  className="rounded border-secondary cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                />
                <span
                  className={`${task.completed ? "line-through text-secondary" : ""} transition-all duration-200`}
                >
                  {task.text}
                </span>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <BtnClicked
                  title="Edit task"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditTask(task.id);
                    onEditTaskII(task.id);
                  }}
                  icon="✏️"
                />
                <BtnClicked
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteTask(task.id);
                  }}
                  title="Delete task"
                  icon="🗑️"
                />

                <div className="cursor-grab text-secondary">⋮⋮</div>
              </div>
            </>
          )}
        </li>
      )}
    </Draggable>
  )
);

TaskItem.displayName = "TaskItem";

export default TaskItem;
