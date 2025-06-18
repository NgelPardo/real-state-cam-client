'use client';

import { Property } from "@/interfaces";
import { createProperty, updateProperty } from "@/services";
import { getValidImageSrc } from "@/utils/getValidImageSrc";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type PropertyForm = Omit<Property, 'id'>;

interface Props {
  property: Property | null;
}

export default function PropertyForm({ property }: Props) {
    const router = useRouter();
    const [form, setForm] = useState<PropertyForm>({
        name: property?.name ?? '',
        address: property?.address ?? '',
        price: property?.price ?? 0,
        codeInternal: property?.codeInternal ?? '',
        year: property?.year ?? '',
        idOwner: property?.idOwner ?? '',
        image: ''
    } as PropertyForm);

    const isEdit = !!property;
    const imageSrc = isEdit ? getValidImageSrc(property.image) : null;

    useEffect(() => {
      if (property) {
        setForm({
          name: property.name,
          address: property.address,
          price: property.price,
          codeInternal: property.codeInternal ?? '',
          year: property.year,
          idOwner: property.idOwner,
          image: ''
        });
      }
    }, [property]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const savedProperty = isEdit
            ? await updateProperty(property!.id, form)
            : await createProperty(form);   
            
            router.push('/admin/properties');
        } catch (error) {
            console.error("Error al guardar la propiedad:", error);
        }
    }

  return (
    <div>
      <h1 className="font-bold mb-2">{property ? "Editar Propiedad" : "Nueva Propiedad"}</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={form.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Dirección</label>
          <input 
            type="text" 
            id="address" 
            name="address"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={form.address} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Precio</label>
          <input 
            type="number" 
            id="price" 
            name="price"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={form.price.toString()} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="codeInternal">Código Interno</label>
          <input 
            type="text" 
            id="codeInternal" 
            name="codeInternal"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={form.codeInternal} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="year">Año</label>
          <input 
            type="number" 
            id="year" 
            name="year"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={form.year} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="owner">Propietario</label>
          <input 
            type="text" 
            id="owner" 
            name="idOwner"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={form.idOwner} onChange={handleChange} />
        </div>
        {isEdit && (
          <>
          <div>
            <span>Imagen</span>            
            <Image
              src={property.image ? property.image : '/imgs/houseAvatar.png'}
              alt={property.name}
              width={70}
              height={70}
              className="rounded"
            />
            <Link
              href={`/property-image/${property.id}`}
            >
              <button 
                className="hover:shadow-form rounded-md bg-purple-600 py-3 px-8 text-center text-base font-semibold text-white outline-none mt-4"
              >
                Actualizar imagen
              </button>
            </Link>
          </div>
          <hr className="mt-2"/>
          </>
        )}
        <button 
            disabled = { isEdit }
            className="hover:shadow-form rounded-md bg-purple-600 py-3 px-8 text-center text-base font-semibold text-white outline-none mt-4"
            type="submit">{property ? "Guardar Cambios" : "Crear Propiedad"}</button>
      </form>
    </div>
  )
}
