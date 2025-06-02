// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800">Välkommen!</h1>
        <p className="mt-2 text-gray-600">Här är din Dashboard.</p>
      </main>
    </div>
  );
};

export default Dashboard;
