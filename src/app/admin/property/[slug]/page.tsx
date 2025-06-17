import { getPropertyById } from "@/services";
import PropertyForm from "./ui/PropertyForm";

interface Props {
  params: {
    slug: string;
  }
}

export default async function PropertyPage({ params }: Props) {

    const { slug } = params;

    let property = null;
    if (slug !== 'new') {
        property = await getPropertyById(slug);
    }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md">
        <PropertyForm property={property} />
      </div>
    </div>
  )
}
