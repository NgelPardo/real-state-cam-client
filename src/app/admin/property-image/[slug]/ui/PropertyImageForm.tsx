'use client'

import { PropertyImage } from "@/interfaces";
import { createPropertyImage } from "@/services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type PropertyImageForm = Omit<PropertyImage, 'id'>;

interface Props {
  propertyImage: PropertyImage | null;
}

export default function PropertyImageForm({ propertyImage }: Props) {   
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [form, setForm] = useState<PropertyImageForm>({
        idProperty: propertyImage?.idProperty ?? '',
        file: propertyImage?.file ?? '',
        enabled: propertyImage?.enabled ?? true
    });

    useEffect(() => {
        if(propertyImage){
            setForm({
                idProperty: propertyImage.idProperty,
                file: propertyImage.file,
                enabled: propertyImage.enabled
            });
        }
    }, [propertyImage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            console.log(form);
            if (!form.idProperty || form.enabled === undefined) {
                console.error("Todos los campos son requeridos.");
                return;
            }

            const finalForm: Omit<PropertyImage, 'id'> = {
                idProperty: form.idProperty,
                file: selectedFile || '',
                enabled: form.enabled,
            };

            await createPropertyImage(finalForm);

            router.push('/admin/properties');
        } catch (error) {
            console.error("Error al guardar la imagen:", error);
        }
    }

  return (
    <div>
        <h1 className="font-bold mb-2">{propertyImage ? "Actualizar Imagen" : "Añadir Imagen"}</h1>
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="file">Imagen</label>
                <input 
                    type="file" 
                    id="file"
                    name="file"
                    accept="image/*"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setSelectedFile(file);
                        }
                    }}/>
            </div>
            <div className="flex flex-col mt-3">
                <label htmlFor="enabled" className="mb-1">Habilitado</label>
                <input 
                    type="checkbox" 
                    id="enabled"
                    name="enabled"
                    className="mb-2 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-500 checked:bg-purple-500 checked:before:bg-purple-500 hover:before:opacity-10"
                    checked={form.enabled} onChange={(e) => setForm({ ...form, enabled: e.target.checked })}/>
            </div>            
            <button
                className="hover:shadow-form rounded-md bg-purple-600 py-3 px-8 text-center text-base font-semibold text-white outline-none mt-4"
                type="submit">{propertyImage ? "Guardar Cambios" : "Añadir Imagen"}
            </button>
        </form>
    </div>
  )
}
