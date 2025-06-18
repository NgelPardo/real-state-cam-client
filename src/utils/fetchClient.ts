
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
    let errorBody: any;

    try {
      errorBody = await res.json();
    } catch {
      errorBody = { message: await res.text() }; // fallback si no es JSON
    }

    const message = errorBody?.error.name ?? 'Error desconocido';
    const code = errorBody?.error.code ?? res.status;

    const error = new Error(message) as Error & { code?: string };

    error.code = code;

    throw error;
  }

  return res.json() as Promise<T>;
}