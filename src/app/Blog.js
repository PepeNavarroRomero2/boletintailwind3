"use client"
import React from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Mi Blog Personal</h1>
        <p className="text-gray-600">Reflexiones y aprendizajes diarios</p>
      </header>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <main className="md:w-2/3 space-y-6">
          {[1, 2, 3].map((article) => (
            <div key={article} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Artículo {article}</h2>
              <p className="text-gray-700">
                Resumen del artículo {article}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </main>
        <aside className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Enlaces Relacionados</h3>
            <ul className="space-y-2">
              <li>
                <a href="#enlace1" className="text-blue-500 hover:underline">Enlace 1</a>
              </li>
              <li>
                <a href="#enlace2" className="text-blue-500 hover:underline">Enlace 2</a>
              </li>
              <li>
                <a href="#enlace3" className="text-blue-500 hover:underline">Enlace 3</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
