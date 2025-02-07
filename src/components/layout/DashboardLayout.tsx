
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Toaster } from "@/components/ui/sonner";

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navigation isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main
        className={`pt-16 transition-all duration-300 ${
          isSidebarOpen ? "pl-64" : "pl-0"
        }`}
      >
        <div className="container mx-auto p-6">
          <Outlet />
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
};
