import React from 'react'

export default function StatsSection() {
  return (
    <div className="flex gap-8 mt-10 text-sm">
      <div className="flex items-center space-x-2">
        <div className="bg-purple-100 p-2 rounded-full">
          🔍
        </div>
        <div>
          <p className="text-purple-600 font-bold">50k+ compradores</p>
          <p className="text-gray-500">cree en nuestro servicio</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="bg-purple-100 p-2 rounded-full">
          🏠
        </div>
        <div>
          <p className="text-purple-600 font-bold">10k+ propiedades</p>
          <p className="text-gray-500">casas listas para habitar</p>
        </div>
      </div>
    </div>
  )
}
