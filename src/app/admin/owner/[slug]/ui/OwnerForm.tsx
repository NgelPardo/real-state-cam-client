'use client'

import { Owner } from "@/interfaces";
import { createOwner, updateOwner } from "@/services";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type OwnerForm = Omit<Owner, 'id'>;

interface Props {
  owner: Owner | null;
}

export default function OwnerForm({ owner }: Props) {
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [form, setForm] = useState<OwnerForm>({
        name: owner?.name ?? '',
        address: owner?.address ?? '',
        photo: owner?.photo ?? '',
        birthday: owner?.birthday 
            ? new Date(owner.birthday).toISOString().split('T')[0]
            : ''
    });

    const isEdit = !!owner;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setForm({ ...form, photo: file });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (!form.name || !form.address || !form.birthday) {
                console.error("Todos los campos son requeridos.");
                return;
            }

            const finalForm: Omit<Owner, 'id'> = {
                name: form.name,
                address: form.address,
                birthday: form.birthday,
                photo: selectedFile || '',
            };

            console.log(finalForm);

            const savedOwner = isEdit
            ? await updateOwner(owner!.id, finalForm)
            : await createOwner(finalForm);   
            
            router.push('/admin/owners');
        } catch (error) {
            console.error("Error al guardar la propiedad:", error);
        }
    }

  return (
    <div>
        <h1 className="font-bold mb-2">{owner ? "Editar Propietario" : "Nuevo Propietario"}</h1>
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="photo">Foto</label>
                <input 
                    type="file" 
                    id="photo"
                    name="photo"
                    accept="image/*"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setSelectedFile(file);
                        }
                    }}/>
            </div>
            <div>
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={form.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="address">Direccion</label>
                <input 
                    type="text" 
                    id="address"
                    name="address"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={form.address} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="birthday">Fecha Nacimiento</label>
                <input
                    type="date"
                    name="birthday"
                    className="w-full px-4 py-3 border rounded-md border-[#e0e0e0] bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.birthday} onChange={handleChange}
                />
            </div>
            <button
                className="hover:shadow-form rounded-md bg-purple-600 py-3 px-8 text-center text-base font-semibold text-white outline-none mt-4"
                type="submit">{owner ? "Guardar Cambios" : "Crear Propietario"}
            </button>
        </form>
    </div>
  )
}
