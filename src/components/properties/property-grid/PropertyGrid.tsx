import { PropertyCard } from "@/components";
import { Property } from "@/interfaces"

interface Props {
    properties: Property[];
}

export const PropertyGrid = ({ properties }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 mt-6">
        {
            properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))
        }
    </div>
  )
}
