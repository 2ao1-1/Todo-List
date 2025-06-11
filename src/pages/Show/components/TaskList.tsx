import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import useTask from "../../common/hook/useTask";
import { useTodos } from "../../common/hook/useTodos";
import NoTasks from "./NoTasks";
import { MainTaskItem } from "./MainTaskItem";
import { EditTaskItem } from "./EditTaskItem";
import DragAndDropBtn from "./DragAndDropBtn";
import TaskItem from "./TaskItem";
import useTaskListState from "../hook/useTaskListState";
import useKeyCuts from "../hook/useKeyCuts";
import UseDragAndDrop from "../hook/useDragAndDrop";
import toast from "react-hot-toast";
import { ToastConfirm } from "../../common/components/ToastConfirm";

export default function TaskList({ todoId }: { todoId: number | undefined }) {
  const { GetTodoById } = useTodos();
  const { EditTask, DeleteTask } = useTask();
  const { data: todo } = GetTodoById(Number(todoId));

  const {
    editingTaskId,
    setEditingTaskId,
    editTaskText,
    setEditTaskText,
    selectedTaskIndex,
    setSelectedTaskIndex,
    localTasks,
    setLocalTasks,
  } = useTaskListState(todo);

  const handleUpdateTask = () => {
    if (!editTaskText.trim() || editingTaskId === null || !todo) return;

    EditTask.mutate({
      todoId: todo.id,
      taskId: editingTaskId,
      taskData: { text: editTaskText },
    });

    setEditingTaskId(null);
    setEditTaskText("");
  };

  const handleToggleComplete = (taskId: number, completed: boolean) => {
    if (!todo) return;

    EditTask.mutate({
      todoId: todo.id,
      taskId,
      taskData: { completed: !completed },
    });
  };

  const handleDeleteTask = (taskId: number) => {
    if (!todo) return;
    toast.custom((t) => (
      <ToastConfirm
        t={t}
        message="Are you sure you want to delete this task?"
        onConfirm={() => DeleteTask.mutate({ todoId: todo.id, taskId })}
      />
    ));
  };

  const handleDragEnd = UseDragAndDrop(
    localTasks,
    setLocalTasks,
    selectedTaskIndex,
    setSelectedTaskIndex,
    todo ?? null,
    EditTask
  );

  useKeyCuts({
    todo,
    localTasks,
    selectedTaskIndex,
    editingTaskId,
    setSelectedTaskIndex,
    setEditingTaskId,
    setEditTaskText,
    handleToggleComplete,
    handleDeleteTask,
  });

  return (
    <div className="mb-4 overflow-y-scroll">
      {localTasks.length === 0 ? (
        <NoTasks />
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId={`tasks-${todoId}`} type="TASK">
            {(provided) => (
              <ul
                className="space-y-1 max-h-80 py-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {localTasks
                  .sort((a, b) => a.order - b.order)
                  .map((task, index) => (
                    <Draggable
                      key={task.id.toString()}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(providedDraggable, snapshot) => (
                        <TaskItem
                          index={index}
                          providedDraggable={providedDraggable}
                          snapshot={snapshot}
                          selectedTaskIndex={selectedTaskIndex}
                          setSelectedTaskIndex={setSelectedTaskIndex}
                          completed={task.completed}
                        >
                          <DragAndDropBtn
                            providedDraggable={providedDraggable}
                          />

                          {editingTaskId === task.id ? (
                            <EditTaskItem
                              editTaskText={editTaskText}
                              setEditTaskText={setEditTaskText}
                              setEditingTaskId={setEditingTaskId}
                              handleUpdateTask={handleUpdateTask}
                            />
                          ) : (
                            <MainTaskItem
                              task={task}
                              handleToggleComplete={handleToggleComplete}
                              setEditingTaskId={setEditingTaskId}
                              setEditTaskText={setEditTaskText}
                              handleDeleteTask={handleDeleteTask}
                            />
                          )}
                        </TaskItem>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}
