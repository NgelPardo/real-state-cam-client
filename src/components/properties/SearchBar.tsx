import React, { useState } from 'react'

interface Props {
  onSearch: (filters: { name: string; address: string; price: string }) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ name, address, price });
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-b-xl p-4 flex flex-col md:flex-row items-stretch gap-4">
      
      {/* Nombre */}
      <div className="flex-1">
        <label className="block text-xs text-gray-500 mb-1">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: Casa familiar"
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Dirección */}
      <div className="flex-1">
        <label className="block text-xs text-gray-500 mb-1">Dirección</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ej: Calle 123, Bogotá"
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Rango de precio */}
      <div className="flex-1">
        <label className="block text-xs text-gray-500 mb-1">Rango de precios</label>
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Seleccionar</option>
          <option value="0-200000">0 - 200,000 USD</option>
          <option value="200000-700000">200,000 - 700,000 USD</option>
          <option value="700000-1000000">700,000 - 1,000,000 USD</option>
          <option value="1000000-999999999999999999999999">Más de 1,000,000 USD</option>
        </select>
      </div>

      <div className="flex-none self-end md:self-center">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition mt-4.5">
          Buscar propiedades
        </button>
      </div>
    </form>
  )
}
