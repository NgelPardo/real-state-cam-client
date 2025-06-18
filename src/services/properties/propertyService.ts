import { Property } from "@/interfaces";
import { fetchClient } from "@/utils/fetchClient";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProperties = async () => {
  const res = await fetchClient<{ value: Property[] }>(`${apiBaseUrl}/api/properties`);
  return res.value;
};

export const getPropertyById = async (id: string) => {
  const res = await fetchClient<Property>(`${apiBaseUrl}/api/properties/${id}`);
  return res;
};

export const createProperty = async (data: Omit<Property, "id">) => {
  const res = await fetchClient<{ value: Property }>(`${apiBaseUrl}/api/properties`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.value;
};

export const updateProperty = async (id: string, data: Partial<Property>) => {
  const res = await fetchClient<{ value: Property }>(`${apiBaseUrl}/api/properties/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res.value;
};

export const getPropertiesByFilters = async (filters: {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
}) => {
  const params = new URLSearchParams();

  if (filters.name) params.append("name", filters.name);
  if (filters.address) params.append("address", filters.address);
  if (filters.minPrice !== undefined) params.append("minPrice", filters.minPrice.toString());
  if (filters.maxPrice !== undefined) params.append("maxPrice", filters.maxPrice.toString());

  const res = await fetchClient< Property[] >(
    `${apiBaseUrl}/api/properties/filter?${params.toString()}`
  );

  return res;
};
