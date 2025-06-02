// src/pages/BudgetPage.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TransactionModal from "../components/TransactionModal";

const BudgetPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState({ category: "", type: "" });

  const categories = ["Mat", "Hyra", "Lön", "Transport", "Övrigt"];

  const addTransaction = (tx) => {
    setTransactions((prev) => [...prev, tx]);
  };

  const filteredTransactions = transactions.filter((tx) => {
    return (
      (filter.category ? tx.category === filter.category : true) &&
      (filter.type ? tx.type === filter.type : true)
    );
  });

  const totalIncome = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const totalExpense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-100 p-4 rounded shadow">
            <h2 className="text-sm text-gray-600">Totala Utgifter</h2>
            <p className="text-xl font-bold text-red-600">{totalExpense} kr</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h2 className="text-sm text-gray-600">Totala Inkomster</h2>
            <p className="text-xl font-bold text-green-600">{totalIncome} kr</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <h2 className="text-sm text-gray-600">Balans</h2>
            <p className="text-xl font-bold text-blue-600">{balance} kr</p>
          </div>
        </div>

        <div className="mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Lägg till transaktion
          </button>
        </div>

        <div className="flex space-x-4 mb-4">
          <select
            value={filter.category}
            onChange={(e) => setFilter((f) => ({ ...f, category: e.target.value }))}
            className="border px-3 py-1 rounded"
          >
            <option value="">Alla kategorier</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={filter.type}
            onChange={(e) => setFilter((f) => ({ ...f, type: e.target.value }))}
            className="border px-3 py-1 rounded"
          >
            <option value="">Alla typer</option>
            <option value="income">Inkomst</option>
            <option value="expense">Utgift</option>
          </select>
        </div>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Datum</th>
              <th className="p-2 text-left">Beskrivning</th>
              <th className="p-2 text-left">Kategori</th>
              <th className="p-2 text-left">Typ</th>
              <th className="p-2 text-left">Belopp</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx) => (
              <tr key={tx.id}>
                <td className="p-2">{tx.date}</td>
                <td className="p-2">{tx.description}</td>
                <td className="p-2">{tx.category}</td>
                <td className="p-2">{tx.type}</td>
                <td className="p-2">{tx.amount} kr</td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <TransactionModal
            onClose={() => setShowModal(false)}
            onAddTransaction={addTransaction}
            categories={categories}
          />
        )}
      </div>
    </div>
  );
};

export default BudgetPage;
