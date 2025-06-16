import { titleFont } from "@/config/fonts";
import Image from 'next/image';
import { initialData } from "@/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  }
}

export default function({ params }: Props) {
  
  const { slug } = params;
  const property = initialData.properties.find((property) => property.id === slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="relative h-112 col-span-1 md:col-span-2">
        <Image src={ property.image?.file } alt={ property.name } fill className="object-cover rounded-lg"/>
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={ `${titleFont.className} antialiased font-bold text-xl` }>
          { property.name }
        </h1>
        <p className="text-lb mb-5">${ property.price }</p>
        <p className="text-lb mt-5">{ property.address }</p>
        <p className="text-lb mt-2 mb-5">{ property.year }</p>

        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Contactar
        </button>
      </div>
    </div>
  );
}