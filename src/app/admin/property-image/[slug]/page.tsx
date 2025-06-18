import { getPropertyImageByIdProperty } from "@/services";

interface Props {
  params: {
    slug: string;
  }
}

export default async function PropertyImagePage({ params }: Props) {

    const { slug } = params;
    
    let propertyImage = null;
    if (slug !== 'new') {
        propertyImage = await getPropertyImageByIdProperty(slug);
    }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md">
            <PropertyImagePage propertyImage={propertyImage} />
        </div>
    </div>
  )
}
