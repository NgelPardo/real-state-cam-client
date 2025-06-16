import React from 'react'
import PropertyCard from '../property/PropertyCard';

const mockProperties = [
  {
    id: 1,
    title: 'Palm Harbor',
    address: '2699 Green Valley, Highland Lake, FL',
    price: '$2,095',
    beds: 3,
    baths: 2,
    area: '5x7 m²',
    image: '/imgs/property-1.jpg',
    popular: true,
  },
  {
    id: 2,
    title: 'Beverly Springfield',
    address: '2821 Lake Sevilla, Palm Harbor, TX',
    price: '$2,700',
    beds: 4,
    baths: 2,
    area: '6x7.5 m²',
    image: '/imgs/property-2.jpg',
    popular: true,
  },
  {
    id: 3,
    title: 'Faulkner Ave',
    address: '909 Woodland St., Michigan, IN',
    price: '$4,550',
    beds: 4,
    baths: 3,
    area: '8x9 m²',
    image: '/imgs/property-3.jpg',
    popular: true,
  },
  {
    id: 4,
    title: 'Faulkner Ave',
    address: '909 Woodland St., Michigan, IN',
    price: '$4,550',
    beds: 4,
    baths: 3,
    area: '8x9 m²',
    image: '/imgs/property-3.jpg',
    popular: true,
  },
  // Agrega más propiedades según necesites...
];

export default function FeaturedPropertiesSection() {
  return (
    <section className="py-16 bg-white w-full px-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-blue-950">Basado en tu ubicación</h2>
          <p className="text-gray-500">Algunas propiedades seleccionadas cerca de ti</p>
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex bg-gray-100 rounded-lg overflow-hidden">
            {['Rent', 'Buy', 'Sell'].map((type) => (
              <button
                key={type}
                className="px-4 py-2 text-sm font-medium hover:bg-purple-100 focus:bg-purple-100 focus:outline-none"
              >
                {type}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Buscar..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Grid de propiedades */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Botón final */}
        <div className="text-center mt-10">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition">
            Ver más propiedades
          </button>
        </div>
      </div>
    </section>
  )
}
