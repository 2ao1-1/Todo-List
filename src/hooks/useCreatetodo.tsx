import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../hooks/useTodo";

/**
 * Custom hook to manage the creation of a new todo item.
 * Handles form state, file upload, submission, error handling, and navigation.
 */
export function useCreateTodo() {
  const navigate = useNavigate();
  const { createTodo, getAllTodos } = useTodos();

  // States for form data
  const [title, setTitle] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("📝");

  // UI & validation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => navigate("/app");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    setIsSubmitting(true);

    try {
      // Create the new todo
      const newTodo = await createTodo({
        title: title.trim(),
        icon: selectedIcon,
        tasks: [],
      });

      // Refresh todos
      await getAllTodos();

      // Redirect to newly created todo detail page
      navigate(`/app/${newTodo.id}`);
    } catch (error) {
      console.error("Failed to create todo:", error);
      setError("Failed to create todo. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    title,
    setTitle,
    selectedIcon,
    setSelectedIcon,
    error,
    isSubmitting,
    handleSubmit,
    handleClose,
  };
}
