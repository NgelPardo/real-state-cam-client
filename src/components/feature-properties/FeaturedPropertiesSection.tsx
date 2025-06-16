import Link from 'next/link';
import { initialData } from '@/seed';
import { PropertyCard } from "@/components";

const mockProperties = initialData.properties;

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
            {['Comprar', 'Vender'].map((type) => (
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
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Botón final */}
        <div className="text-center mt-10">
          <Link href="/properties">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition">
              Ver más propiedades
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
