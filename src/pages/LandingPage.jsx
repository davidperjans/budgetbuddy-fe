import React from "react";
import { BarChart2, Target, Wallet } from "lucide-react"; // kräver: npm i lucide-react

const LandingPage = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Budgetera smart med{" "}
            <span className="text-green-600">BudgetBuddy</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Få full kontroll över dina pengar med vårt enkla och visuella verktyg
            för personlig ekonomi.
          </p>
          <div className="space-x-4">
            <button
              onClick={onLoginClick}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-200"
            >
              Logga in
            </button>
            <button
              onClick={onRegisterClick}
              className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition duration-200"
            >
              Registrera dig
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src="https://illustrations.popsy.co/gray/chart-growth.svg"
            alt="budget illustration"
            className="w-80 md:w-96 animate-fade-in-up"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Funktioner</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="hover:scale-105 transition-transform duration-200">
            <Wallet className="mx-auto text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Skapa budget</h3>
            <p className="text-gray-600">
              Lägg enkelt till inkomster, utgifter och kategorier.
            </p>
          </div>
          <div className="hover:scale-105 transition-transform duration-200">
            <Target className="mx-auto text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Sätt mål</h3>
            <p className="text-gray-600">
              Sätt upp sparmål och följ dina framsteg över tid.
            </p>
          </div>
          <div className="hover:scale-105 transition-transform duration-200">
            <BarChart2 className="mx-auto text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Visualiseringar</h3>
            <p className="text-gray-600">
              Få insikter via tydliga grafer och rapporter.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-green-100 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Varför BudgetBuddy?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          BudgetBuddy är skapat för att hjälpa dig fatta smartare ekonomiska
          beslut. Vårt verktyg gör det lätt att planera, följa upp och optimera
          din ekonomi – helt gratis.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BudgetBuddy. Alla rättigheter förbehållna.
      </footer>
    </div>
  );
};

export default LandingPage;
