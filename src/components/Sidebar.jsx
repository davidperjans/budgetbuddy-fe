import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Sidebar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/", { replace: true });
  };

  const linkClasses =
    "flex items-center px-4 py-2 mt-2 text-green-700 transition-colors duration-300 transform rounded-lg hover:bg-green-100 hover:text-green-800";
  const activeClass = "bg-green-100 font-semibold";

  return (
    <aside className="flex flex-col w-64 h-full px-4 py-8 overflow-y-auto bg-green-50 border-r border-green-100 justify-between">
      {/* Header */}
      <div>
        <div className="text-2xl font-extrabold text-green-600 text-center mb-8">
          BudgetBuddy
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center -mx-2">
          <div className="w-24 h-24 mx-2 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
            {user?.username?.substring(0, 2).toUpperCase() || "??"}
          </div>

          <h4 className="mx-2 mt-2 font-medium text-green-800">
            {user?.username || "Användare"}
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-green-600">
            {user?.email || "epost@example.com"}
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClass : ""}`
            }
          >
            <span className="mx-4 font-medium">Hem</span>
          </NavLink>

          <NavLink
            to="/budgets"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClass : ""}`
            }
          >
            <span className="mx-4 font-medium">Mina budgetar</span>
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClass : ""}`
            }
          >
            <span className="mx-4 font-medium">Mina uppgifter</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeClass : ""}`
            }
          >
            <span className="mx-4 font-medium">Inställningar</span>
          </NavLink>
        </nav>
      </div>

      {/* Logout button */}
      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-100 rounded-lg transition"
        >
          Logga ut
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
