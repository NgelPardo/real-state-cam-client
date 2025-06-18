import { getPropertyImageByIdProperty } from "@/services";
import PropertyImageForm from './ui/PropertyImageForm';

interface Props {
  params: {
    slug: string;
  }
}

export default async function PropertyImagePage({ params }: Props) {

    const { slug } = params;
    
    let propertyImage = null;
    if (slug !== 'new') {
      try {
        propertyImage = await getPropertyImageByIdProperty(slug);
      } catch (error) {
        console.error("Error al obtener la imagen de la propiedad:", error);
        propertyImage = {
          idProperty: slug,
          file: '',
          enabled: true,          
        };
      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md">
            <PropertyImageForm propertyImage={propertyImage} />
        </div>
    </div>
  )
}
