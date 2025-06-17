
export async function fetchClient<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error ${res.status}: ${errorMessage}`);
  }

  return res.json() as Promise<T>;
}