import { useState } from "react";
import { register } from "../api/endpoints/auth";
import { useAuth } from "../hooks/useAuth";

const RegisterModal = ({ onClose }) => {
  const { loginUser } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Lösenorden matchar inte");
      return;
    }

    try {
      const result = await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (result.isSuccess) {
        loginUser(result.data.username, result.data.token);
        onClose();
      } else {
        setError(result.errors?.[0] || "Något gick fel.");
      }
    } catch (err) {
      setError("Fel vid anrop: " + err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-green-600 text-center mb-4">
          Registrera dig
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Användarnamn"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-post"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Lösenord"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Bekräfta lösenord"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Registrera
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
