import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Todo } from "../types/TodoListTypes";
import { isAuthenticated } from "../services/authToken";
import { useTodos } from "../hooks/useTodo";

export default function useDashBoard() {
  const [activeTodo, setActiveTodo] = useState<number | null>(null);
  const [isOperBadge, setOpenBadge] = useState(false);
  const { todos, getAllTodos, deleteTodo } = useTodos();
  const navigate = useNavigate();

  useEffect(() => {
    const token = isAuthenticated();
    if (!token) {
      navigate("/");
    } else {
      getAllTodos();
    }
  }, [todos]);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  function handleShowingTodo(todo: Todo) {
    setActiveTodo(todo.id);
    navigate(`/app/${todo.id}`);
  }

  const handleCreateTodo = () => {
    navigate("/app/newList");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return {
    // isOpen,
    isOperBadge,
    todos,
    activeTodo,
    setActiveTodo,
    setOpenBadge,
    handleCreateTodo,
    handleShowingTodo,
    // toggleSidebar,
    handleLogout,
    activeTodos,
    completedTodos,
    deleteTodo,
  };
}
