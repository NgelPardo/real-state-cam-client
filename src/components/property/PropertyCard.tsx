import Image from 'next/image';

type Props = {
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  popular?: boolean;
};

export default function PropertyCard({ title, address, price, beds, baths, area, image, popular }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition">
      <div className="relative">
        <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
        {popular && (
          <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
            Popular
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-purple-600 font-bold">{price} <span className="text-gray-500 font-normal text-sm">/mes</span></p>
        <h3 className="font-semibold text-blue-950">{title}</h3>
        <p className="text-xs text-gray-500 mb-2">{address}</p>

        <div className="flex text-xs text-gray-500 gap-4">
          <span>{beds} Beds</span>
          <span>{baths} Bathrooms</span>
          <span>{area}</span>
        </div>
      </div>
    </div>
  )
}
