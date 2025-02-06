"use client"
import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen grid grid-rows-layout">
      <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Dashboard</div>
          <div>
            <a href="#perfil" className="hover:text-blue-400 mx-2">Perfil</a>
            <a href="#ajustes" className="hover:text-blue-400 mx-2">Ajustes</a>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-layout gap-4 pt-20">
        <aside className="bg-gray-200 p-6 rounded-lg shadow-lg h-full">
          <nav className="space-y-4">
            <a href="#inicio" className="block hover:text-blue-400">Inicio</a>
            <a href="#estadisticas" className="block hover:text-blue-400">Estadísticas</a>
            <a href="#reportes" className="block hover:text-blue-400">Reportes</a>
            <a href="#soporte" className="block hover:text-blue-400">Soporte</a>
          </nav>
        </aside>
        <main className="p-6 overflow-auto">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((card) => (
              <div key={card} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Tarjeta {card}</h3>
                <p className="text-gray-600">Datos o resumen de la tarjeta {card}.</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-scroll">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Nombre</th>
                  <th className="px-4 py-2 text-left">Estado</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">Elemento {i + 1}</td>
                    <td className="px-4 py-2">Activo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
