import { Property } from "@/interfaces";
import { fetchClient } from "@/utils/fetchClient";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProperties = async () => {
  const res = await fetchClient<{ value: Property[] }>(`${apiBaseUrl}/api/properties`);
  return res.value;
};

export const getPropertyById = async (id: string) => {
  const res = await fetchClient<{ value: Property }>(`${apiBaseUrl}/api/properties/${id}`);
  return res.value;
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
