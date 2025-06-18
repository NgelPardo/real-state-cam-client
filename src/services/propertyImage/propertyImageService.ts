import { PropertyImage } from "@/interfaces";
import { fetchClient } from "@/utils/fetchClient";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getPropertyImageByIdProperty = async (idProperty: string) => {
  try {
    const res = await fetchClient<PropertyImage>(
      `${apiBaseUrl}/api/properties/property-image/${idProperty}`
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const createPropertyImage = async (data: Omit<PropertyImage, "id">) => {
  const formData = new FormData();
  formData.append("idProperty", data.idProperty);
  formData.append("enabled", data.enabled.toString());

  if (data.file instanceof File) {
    formData.append("file", data.file);
  }

  const res = await fetch(`${apiBaseUrl}/api/properties/property-image`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Error en la creación");

  const responseData = await res.json();
  return responseData.value;
};

