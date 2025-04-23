import { useParams } from "react-router-dom";
import { DragDropContext } from "@hello-pangea/dnd";
import { useListModal } from "../hooks/useListModal";
import { TodoHeader } from "../ui/TodoUI/TodoHeader";
import { TodoProgressBar } from "../ui/TodoUI/TodoProgressBar";
import { TodoTaskForm } from "../ui/TodoUI/TodoTaskForm";
import { TodoKeyboardShortcuts } from "../ui/TodoUI/TodoKeyboardShortcuts";
import TaskList from "../ui/TodoUI/TaskList";
import { Spinner } from "../ui/Spinner";
import { Toast } from "../ui/Toast";

export default function ListModal() {
  const { id } = useParams();
  const {
    currentTodo,
    isEditing,
    editedTitle,
    editedIcon,
    newTask,
    progress,
    selectedTask,
    editingTaskId,
    editingTaskText,
    isLoading,
    error,
    handleClose,
    handleToggleTask,
    handleDeleteTask,
    handleEditTask,
    handleAddTask,
    handleSaveTodo,
    handleDelete,
    setIsEditing,
    setEditedTitle,
    setEditedIcon,
    setNewTask,
    setSelectedTask,
    setEditingTaskId,
    setEditingTaskText,
    handleDragEnd,
    handleEditingTaskKeyDown,
  } = useListModal(id);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-card w-full max-w-lg rounded-lg shadow-lg p-6 m-4 flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      </div>
    );
  }

  if (!currentTodo) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-card w-full max-w-lg rounded-lg shadow-lg p-6 m-4 text-center text-secondary">
          Todo not found
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      {error && <Toast type="error" message={error} />}

      <div
        className="bg-card w-full max-w-lg rounded-lg shadow-lg p-6 m-4 overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col mb-6">
          <TodoProgressBar progress={progress} onClose={handleClose} />

          <TodoHeader
            isEditing={isEditing}
            editedTitle={editedTitle}
            editedIcon={editedIcon}
            currentTodo={currentTodo}
            onEdit={() => setIsEditing(true)}
            onSave={handleSaveTodo}
            onDelete={handleDelete}
            onTitleChange={setEditedTitle}
            onIconSelect={setEditedIcon}
          />
        </div>

        <div className="mb-6">
          <DragDropContext onDragEnd={handleDragEnd}>
            <TaskList
              todoId={currentTodo.id}
              tasks={currentTodo.tasks}
              selectedTask={selectedTask}
              editingTaskId={editingTaskId}
              editingTaskText={editingTaskText}
              onToggleTask={handleToggleTask}
              onEditTask={(taskId) => {
                setEditingTaskId(taskId);
                const task = currentTodo.tasks.find((t) => t.id === taskId);
                if (task) setEditingTaskText(task.text);
              }}
              onEditTaskII={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onEditingTextChange={setEditingTaskText}
              onEditingKeyDown={handleEditingTaskKeyDown}
              onCancelEditing={() => {
                setEditingTaskId(null);
                setEditingTaskText("");
              }}
              onSelectTask={setSelectedTask}
            />
          </DragDropContext>
        </div>

        <TodoTaskForm
          value={newTask}
          onChange={setNewTask}
          onSubmit={handleAddTask}
          onKeyPress={(e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
              handleAddTask(e as unknown as React.FormEvent);
            }
          }}
        />

        <TodoKeyboardShortcuts />
      </div>
    </div>
  );
}
