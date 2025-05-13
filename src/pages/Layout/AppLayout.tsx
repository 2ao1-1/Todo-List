import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/context/AuthContext";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodosView from "../Dashboard/TodosView";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navegate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navegate("/login");
    }
  }, [isAuthenticated, navegate]);

  return (
    <div className="bg-main text-primary flex h-screen overflow-hidden">
      {/* sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col relative">
        {/* header */}
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />

        {/* main content */}
        <TodosView />
        <main className="overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
