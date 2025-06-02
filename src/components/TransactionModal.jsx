// src/components/TransactionModal.jsx
import React, { useState } from "react";

const TransactionModal = ({ onClose, onAddTransaction, categories }) => {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    type: "income",
    date: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ ...formData, id: Date.now() });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Ny transaktion</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            name="amount"
            placeholder="Belopp"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Beskrivning"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Välj kategori</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="income">Inkomst</option>
            <option value="expense">Utgift</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Avbryt
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Lägg till
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
