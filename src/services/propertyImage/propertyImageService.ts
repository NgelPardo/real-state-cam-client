import { PropertyImage } from "@/interfaces";
import { fetchClient } from "@/utils/fetchClient";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getPropertyImageByIdProperty = async (idProperty: string) => {
  const res = await fetchClient<PropertyImage>(`${apiBaseUrl}/api/properties/${idProperty}`);
  return res;
};