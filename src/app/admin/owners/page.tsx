'use client';

import { Owner } from "@/interfaces";
import { getValidImageSrc } from "@/utils/getValidImageSrc";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [owners, setOwners] = useState<Owner[]>([]);
  const [loading, setLoading] = useState(true);
  let photoUrl: string | null = null;

  useEffect(() => {
    const loadOwners = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/owners`);
        const data = await response.json();
        console.log(data);
        setOwners(data.value);
      } catch (error) {
        console.error('Error loading owners', error);
      } finally {
        setLoading(false);
      }
    };

    loadOwners();
  }, []);

  

  return (
    <div className="p-10">
      <div className="flex justify-end mb-5">
        <Link href="/admin/owner/new" className="m-2 p-2 rounded-md transition-all bg-purple-600 text-white">
          Nuevo Propietario
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
                Foto
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
                Fecha Nacimiento
              </th>
            </tr>
          </thead>
          <tbody>
            {owners.map((owner) => {
              const imageSrc = getValidImageSrc(owner.photo);

              return (
              <tr
                key={owner.id}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <Link href={`/admin/owner/${owner.id}`}>
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={owner.name}
                        width={70}
                        height={70}
                        className="rounded"
                      />
                    )}
                  </Link>
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {owner.name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {owner.address}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {new Date(owner.birthday).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
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
