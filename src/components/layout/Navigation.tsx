
import { Link } from "react-router-dom";
import { Home, FileText, Users, Calendar, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Calendar, label: "Attendance", path: "/attendance" },
    { icon: FileText, label: "Quotations", path: "/quotations" },
    { icon: Users, label: "Projects", path: "/projects" },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mr-4 p-2 hover:bg-accent rounded-md"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="font-semibold">Sales Management System</span>
        </div>
      </header>

      <aside
        className={cn(
          "fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300",
          !isOpen && "-translate-x-full"
        )}
      >
        <nav className="space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent"
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};
