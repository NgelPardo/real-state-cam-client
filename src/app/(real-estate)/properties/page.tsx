'use client'

import SearchBar from "@/components/properties/SearchBar";
import SearchTabs from "@/components/hero/SearchTabs";
import { initialData } from "@/seed";
import { PropertyGrid } from "@/components";
import { useState } from "react";
import { getPropertiesByFilters } from "@/services";
import { Property } from "@/interfaces";

// const properties = initialData.properties;

export default function() {
  const [properties, setProperties] = useState<Property[]>([]);

  const handleSearch = async (filters: { name: string, address: string, price: string }) => {
    const { name, address, price } = filters;

    let minPrice: number | undefined;
    let maxPrice: number | undefined;

    if (price) {
      const [min, max] = price.split("-").map(Number);
      minPrice = isNaN(min) ? undefined : min;
      maxPrice = isNaN(max) ? undefined : max;
    }

    console.log(minPrice, maxPrice)

    try {
      const results = await getPropertiesByFilters({
        name,
        address,
        minPrice,
        maxPrice,
      });

      setProperties(results);
    } catch (error) {
      console.error("Error al obtener propiedades:", error);
    }
  }


  return (
    <div className="relative min-h-screen overflow-hidden p-8">
      <SearchTabs />
      <SearchBar onSearch={handleSearch}/>
      {properties.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No se encontraron propiedades con esos filtros.</p>
      ) : (
        <PropertyGrid properties={properties} />
      )}
    </div>
  );
}