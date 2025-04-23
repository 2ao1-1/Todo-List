import { useState } from "react";
import { Outlet } from "react-router-dom";

import DashboardContent from "../ui/AppDashboard/DashboardContent";
import SideBar from "../ui/AppDashboard/SideBar";

// Main AppDashboard Component
export default function AppDashboard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <main className="flex h-screen">
        {/* Sidebar */}
        <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        {/* Content */}
        <DashboardContent isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </main>

      <Outlet />
    </>
  );
}
