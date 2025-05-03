import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getAllTodos } from "../services/TodosApi";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const navegate = useNavigate();

  // console.log(user);

  useEffect(() => {
    if (!isAuthenticated) {
      navegate("/login");
    }
  }, [isAuthenticated, navegate]);

  return (
    <main className="bg-main text-primary min-h-screen overflow-x-auto">
      <header className="flex items-center justify-between">
        <h1>App Layout</h1>

        <div></div>
        <div>{user?.name}</div>
      </header>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
