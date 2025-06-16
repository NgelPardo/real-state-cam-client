import React from 'react'
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-3xs max-w-sm">
      <div className="flex items-center gap-3">
        <Image
          src="/imgs/avatar.png"
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-bold">Manuel Villa</p>
          <p className="text-xs text-gray-500">Comprador · Gestionado por <span className="text-purple-600 font-semibold">Estatery</span></p>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Me encantó lo fluida que fue la compra y finalmente conseguimos la casa que queríamos.
      </p>
      <div className="mt-4 flex justify-between text-sm font-semibold text-gray-800">
        <div>
          <p>$10,500</p>
          <p className="text-xs text-gray-500 font-normal">Ahorra hasta</p>
        </div>
        <div>
          <p>–48 hrs</p>
          <p className="text-xs text-gray-500 font-normal">Tiempo proceso</p>
        </div>
      </div>
    </div>
  )
}
