"use client"
import React from 'react';

export default function Card() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2">Título de la Tarjeta</h2>
      <p className="text-gray-600 mb-4">
        Esta es una breve descripción que explica el contenido de la tarjeta.
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        Acción
      </button>
    </div>
  );
}
