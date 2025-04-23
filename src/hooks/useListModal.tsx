import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "./useTodo";
import { Task, Todo } from "../types/TodoListTypes";

interface UseListModalResult {
  currentTodo: Todo | null;
  isEditing: boolean;
  editedTitle: string;
  editedIcon: string;
  newTask: string;
  progress: number;
  selectedTask: number | null;
  editingTaskId: number | null;
  editingTaskText: string;
  isLoading: boolean;
  error: string | null;
  handleClose: () => void;
  handleToggleTask: (taskId: number) => Promise<void>;
  handleDeleteTask: (taskId: number) => Promise<void>;
  handleEditTask: (taskId: number) => Promise<void>;
  handleAddTask: (e: React.FormEvent) => Promise<void>;
  handleSaveTodo: () => Promise<void>;
  handleDelete: () => Promise<void>;
  setIsEditing: (value: boolean) => void;
  setEditedTitle: (value: string) => void;
  setEditedIcon: (value: string) => void;
  setNewTask: (value: string) => void;
  setSelectedTask: (value: number | null) => void;
  setEditingTaskId: (value: number | null) => void;
  setEditingTaskText: (value: string) => void;
  handleDragEnd: (result: {
    source: { index: number };
    destination: { index: number } | null;
  }) => Promise<void>;
  handleEditingTaskKeyDown: (e: React.KeyboardEvent, taskId: number) => void;
}

export function useListModal(todoId: string | undefined): UseListModalResult {
  const navigate = useNavigate();
  const {
    getTodoById,
    updateTodo,
    deleteTask,
    updateTask,
    deleteTodo,
    addTask,
  } = useTodos();

  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedIcon, setEditedIcon] = useState<string>("");
  const [newTask, setNewTask] = useState("");
  const [progress, setProgress] = useState(0);
  const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTaskText, setEditingTaskText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const calculateProgress = useCallback((tasks: Task[]) => {
    if (!tasks || tasks.length === 0) {
      setProgress(0);
      return;
    }

    const completedTasks = tasks.filter((task) => task.completed).length;
    const progressValue = Math.round((completedTasks / tasks.length) * 100);
    setProgress(progressValue);
  }, []);

  const handleClose = useCallback(() => navigate("/app"), [navigate]);

  const handleError = useCallback((error: unknown) => {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    setError(message);
    setTimeout(() => setError(null), 3000);
  }, []);

  const handleToggleTask = async (taskId: number) => {
    if (!currentTodo) return;

    const task = currentTodo.tasks.find((t) => t.id === taskId);
    if (!task) return;

    try {
      const updatedTodo = await updateTask(currentTodo.id, taskId, {
        completed: !task.completed,
        order: task.order,
      });

      setCurrentTodo(updatedTodo);
      calculateProgress(updatedTodo.tasks);
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    if (!currentTodo) return;

    try {
      const updatedTodo = await deleteTask(currentTodo.id, taskId);
      setCurrentTodo(updatedTodo);
      calculateProgress(updatedTodo.tasks);

      if (selectedTask === taskId) {
        setSelectedTask(null);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleEditTask = async (taskId: number) => {
    if (!currentTodo || !editingTaskText.trim()) return;

    try {
      const task = currentTodo.tasks.find((t) => t.id === taskId);
      if (!task) return;

      const updatedTodo = await updateTask(currentTodo.id, taskId, {
        text: editingTaskText,
        order: task.order,
      });
      setCurrentTodo(updatedTodo);
      setEditingTaskId(null);
      setEditingTaskText("");
    } catch (error) {
      handleError(error);
    }
  };

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentTodo || !newTask.trim()) return;

    try {
      const updatedTodo = await addTask(currentTodo.id, {
        text: newTask,
        completed: false,
      });
      setCurrentTodo(updatedTodo);
      setNewTask("");
      calculateProgress(updatedTodo.tasks);
    } catch (error) {
      handleError(error);
    }
  };

  const handleSaveTodo = async () => {
    if (!currentTodo || !editedTitle.trim()) return;

    try {
      const updatedTodo = await updateTodo(currentTodo.id, {
        title: editedTitle,
        icon: editedIcon,
      });
      setCurrentTodo(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      handleError(error);
    }
  };

  const handleDelete = async () => {
    if (!currentTodo) return;

    try {
      await deleteTodo(currentTodo.id);
      handleClose();
    } catch (error) {
      handleError(error);
    }
  };

  const handleDragEnd = async (result: {
    source: { index: number };
    destination: { index: number } | null;
  }) => {
    if (!currentTodo || !result.destination) return;

    const { source, destination } = result;
    if (source.index === destination.index) return;

    const updatedTasks = Array.from(currentTodo.tasks);
    const [reorderedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, reorderedTask);

    const tasksWithNewOrder = updatedTasks.map((task, index) => ({
      ...task,
      order: index,
    }));

    setCurrentTodo({
      ...currentTodo,
      tasks: tasksWithNewOrder,
    });

    try {
      for (const task of tasksWithNewOrder) {
        await updateTask(currentTodo.id, task.id, {
          text: task.text,
          completed: task.completed,
          order: task.order,
        });
      }
    } catch (error) {
      handleError(error);
      setCurrentTodo(currentTodo);
    }
  };

  const handleEditingTaskKeyDown = useCallback(
    (e: React.KeyboardEvent, taskId: number) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleEditTask(taskId);
      } else if (e.key === "Escape") {
        setEditingTaskId(null);
        setEditingTaskText("");
      }
    },
    [handleEditTask]
  );

  // Fetch todo and initialize state
  useEffect(() => {
    const fetchTodo = async () => {
      if (!todoId) return;

      try {
        setIsLoading(true);
        const todo = await getTodoById(Number(todoId));
        setCurrentTodo(todo);
        setEditedTitle(todo.title);
        setEditedIcon(todo.icon);
        calculateProgress(todo.tasks);
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodo();
  }, [todoId, getTodoById, calculateProgress, handleError]);

  // Keyboard shortcuts handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentTodo) return;

      if ((e.ctrlKey || e.metaKey) && e.key === "n") {
        e.preventDefault();
        document.getElementById("new-task-input")?.focus();
      }

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (currentTodo.tasks.length === 0) return;

        const currentIndex =
          selectedTask !== null
            ? currentTodo.tasks.findIndex((task) => task.id === selectedTask)
            : -1;

        let newIndex;
        if (e.key === "ArrowDown") {
          newIndex =
            currentIndex < currentTodo.tasks.length - 1 ? currentIndex + 1 : 0;
        } else {
          newIndex =
            currentIndex > 0 ? currentIndex - 1 : currentTodo.tasks.length - 1;
        }

        setSelectedTask(currentTodo.tasks[newIndex].id);
      }

      if (e.key === " " && selectedTask !== null && editingTaskId === null) {
        e.preventDefault();
        const task = currentTodo.tasks.find((t) => t.id === selectedTask);
        if (task) {
          handleToggleTask(selectedTask);
        }
      }

      if (
        (e.key === "e" || e.key === "Enter") &&
        selectedTask !== null &&
        editingTaskId === null
      ) {
        e.preventDefault();
        const task = currentTodo.tasks.find((t) => t.id === selectedTask);
        if (task) {
          setEditingTaskId(task.id);
          setEditingTaskText(task.text);
        }
      }

      if (
        e.key === "Delete" &&
        selectedTask !== null &&
        editingTaskId === null
      ) {
        e.preventDefault();
        handleDeleteTask(selectedTask);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    currentTodo,
    selectedTask,
    editingTaskId,
    handleToggleTask,
    handleDeleteTask,
  ]);

  return {
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
  };
}
