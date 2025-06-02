// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();

  const linkClasses =
    "flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200";

  const activeClass =
    "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200";

  return (
    <aside className="flex flex-col w-64 h-full px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">
      <NavLink to="/dashboard" className="mx-auto">
        <img
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt="BudgetBuddy"
        />
      </NavLink>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
          {user?.username || "Användare"}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {user?.email || "epost@example.com"}
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
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
    </aside>
  );
};

export default Sidebar;
