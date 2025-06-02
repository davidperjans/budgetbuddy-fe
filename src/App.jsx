import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard"; // skapa denna
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import { useState } from "react";
import BudgetPage from "./pages/BudgetPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onLoginClick={() => setShowLogin(true)}
              onRegisterClick={() => setShowRegister(true)}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budgets" element={<BudgetPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </>
  );
}

export default App;
