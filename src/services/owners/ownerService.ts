import { Owner } from "@/interfaces";
import { fetchClient } from "@/utils/fetchClient";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getOwners = async () => {
  const res = await fetchClient<{ value: Owner[] }>(`${apiBaseUrl}/api/owners`);
  return res.value;
};

export const getOwnerById = async (id: string) => {
  const res = await fetchClient<{ value: Owner }>(`${apiBaseUrl}/api/owners/${id}`);
  return res.value;
};

export const createOwner = async (data: Omit<Owner, "id">) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("address", data.address);
  formData.append("birthday", data.birthday.toString());

  if (data.photo instanceof File) {
    formData.append("photo", data.photo);
  }

  const res = await fetch(`${apiBaseUrl}/api/owners`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Error en la creación");

  const responseData = await res.json();
  return responseData.value;
};

export const updateOwner = async (id: string, data: Partial<Owner>) => {
  const res = await fetchClient<{ value: Owner }>(`${apiBaseUrl}/api/owners/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res.value;
};
