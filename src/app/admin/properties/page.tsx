'use client';

import { Property } from "@/interfaces";
import { getProperties } from "@/services";
import { getValidImageSrc } from "@/utils/getValidImageSrc";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error('Error cargando propiedades', error);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);


  return (
    <div className="p-10">
      <div className="flex justify-end mb-5">
        <Link href="/admin/property/new" className="m-2 p-2 rounded-md transition-all bg-purple-600 text-white">
          Nueva Propiedad
        </Link>
      </div>

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-400 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Imagen
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Direccion
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Precio
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Codigo Interno
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Año
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Propietario
              </th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => {
              const imageSrc = getValidImageSrc(property.image);

              return (
              <tr
                key={property.id}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Link href={`/admin/property/${property.id}`}>
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={property.name}
                        width={70}
                        height={70}
                        className="rounded"
                      />
                    )}
                  </Link>
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <Link href={`/admin/property/${property.id}`}>
                  {property.name}
                </Link>
                </td>
                <td className="text-sm font-bold  text-gray-900 px-6 py-4 whitespace-nowrap">
                  {property.address}
                </td>

                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {property.price}
                </td>

                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                  {property.codeInternal}
                </td>

                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                  {property.year}
                </td>

                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                  <span>propietario</span>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
