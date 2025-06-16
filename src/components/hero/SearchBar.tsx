import React from 'react'

export default function SearchBar() {
  return (
    <div className="bg-white shadow-md rounded-b-xl p-4 flex flex-col md:flex-row items-stretch gap-4">
      
      {/* Nombre */}
      <div className="flex-1">
        <label className="block text-xs text-gray-500 mb-1">Nombre</label>
        <input
          type="text"
          placeholder="Ej: Casa familiar"
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Dirección */}
      <div className="flex-1">
        <label className="block text-xs text-gray-500 mb-1">Dirección</label>
        <input
          type="text"
          placeholder="Ej: Calle 123, Bogotá"
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Rango de precio */}
      <div className="flex-1">
        <label className="block text-xs text-gray-500 mb-1">Rango de precios</label>
        <select
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Seleccionar</option>
          <option value="0-500">0 - 200,000 USD</option>
          <option value="500-1000">200,000 - 700,000 USD</option>
          <option value="1000-2000">700,000 - 1,000,000 USD</option>
          <option value="2000+">Más de 1,000,000 USD</option>
        </select>
      </div>

      {/* Botón */}
      <div className="flex-none self-end md:self-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition mt-4.5">
          Buscar propiedades
        </button>
      </div>
    </div>
  )
}
