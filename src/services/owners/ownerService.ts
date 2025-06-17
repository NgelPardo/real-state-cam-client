import { Owner } from "@/interfaces";
import { fetchClient } from "@/utils/fetchClient";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getOwners = async () => {
  const res = await fetchClient<{ value: Owner[] }>(`${apiBaseUrl}/api/owners`);
  return res.value;
};
