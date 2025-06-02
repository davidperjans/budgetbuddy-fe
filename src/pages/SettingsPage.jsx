import Sidebar from "../components/Sidebar";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800">Inställningar</h1>
      <p className="mt-2 text-gray-600">Här kan du uppdatera dina inställningar.</p>
      {/* Här kommer formulär för att ändra namn, e-post, lösenord etc. */}
    </div>
    </div>
  );
};

export default SettingsPage;
