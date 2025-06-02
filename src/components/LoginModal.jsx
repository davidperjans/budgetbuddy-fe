import React, { useState } from "react";
import { login } from "../api/endpoints/auth";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await login(formData.email, formData.password);
      console.log("Login result:", result);

      // Inga isSuccess/data - direkt respons
      loginUser(result.userName, result.email, result.token);
      onClose();
      navigate("/dashboard"); // ← byt till din inloggade sida
    } catch (err) {
      console.error("Login error:", err);
      setError("Fel vid inloggning. Kontrollera e-post och lösenord.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Logga in
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="E-post"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Lösenord"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Logga in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
