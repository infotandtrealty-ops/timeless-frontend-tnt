const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include",
  });

  if (!response.ok) {
    let message = `Request failed (${response.status})`;
    try {
      const data = await response.json();
      message = (data && (data.error || data.message)) || message;
    } catch {}
    throw new Error(message);
  }

  try {
    return (await response.json()) as T;
  } catch {
    // no content
    return undefined as unknown as T;
  }
}


