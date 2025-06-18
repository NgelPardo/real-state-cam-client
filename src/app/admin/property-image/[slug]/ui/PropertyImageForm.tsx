'use client'

import { PropertyImage } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type PropertyImageForm = Omit<PropertyImage, 'id'>;

interface Props {
  property: PropertyImage | null;
}

export default function PropertyImageForm({ propertyImage }: Props) {   
    const router = useRouter();
    const [form, setForm] = useState<PropertyImageForm>({
        idProperty: propertyImage?.idProperty ?? '',
        file: propertyImage?.file ?? '',
        enabled: propertyImage?.enabled
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
            await createPropertyImage(form);   
            
            router.push('/admin/properties');
        } catch (error) {
            console.error("Error al guardar la propiedad:", error);
        }
    }

  return (
    <div>PropertyImageForm</div>
  )
}
