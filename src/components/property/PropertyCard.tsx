import { Property } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  property: Property;
}

export const PropertyCard = ({ property }: Props) => {


  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition">
      <div className="relative">
        <Link href={`/property/${property.id}`}>
          <Image src={ property.image } alt={ property.name } width={400} height={300} className="w-full h-48 object-cover" />
        </Link>
      </div>
      <div className="p-4">
        <p className="text-purple-600 font-bold">{property.price}</p>
        <Link href={`/property/${property.id}`} className="block mt-2 hover:underline">
          <h3 className="font-semibold text-blue-950">{property.name}</h3>
        </Link>
        <p className="text-xs text-gray-500 mb-2">{property.address}</p>

        <div className="flex text-xs text-gray-500 gap-4">
          <span>{property.year} Year</span>
        </div>
      </div>
    </div>
  )
}
