"use client";

import React, { useState } from "react";

interface PruebaProps {
  message: string;
  onButtonClick: (newMessage: string) => void;
}

const Prueba: React.FC<PruebaProps> = ({ message, onButtonClick }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-4 bg-gray_secondary rounded shadow-lg">
      <h2 className="text-lg font-bold text-gray-800">{message}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="border p-2 rounded w-full mt-2"
      />
      <button
        onClick={() => onButtonClick(inputValue || "Mensaje predeterminado")}
        className="mt-4 bg-blue_category text-white p-2 rounded hover:bg-blue-500"
      >
        Enviar
      </button>
    </div>
  );
};

export default Prueba;
