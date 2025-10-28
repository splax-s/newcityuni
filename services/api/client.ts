const BASE_URL = 'https://nacu-lms-ae2a4ae13fbe.herokuapp.com';

async function apiFetch(path: string, options: RequestInit = {}) {
  const url = `${BASE_URL}${path}`;

  // Prepare headers. If caller provided headers, respect them. Do not set
  // Content-Type when the body is FormData so the browser can set boundary.
  const providedHeaders = (options.headers as Record<string, string>) || {};
  const headers: Record<string, string> = { ...providedHeaders };

  const bodyIsFormData = typeof window !== 'undefined' && options.body instanceof FormData;
  if (!bodyIsFormData && !('Content-Type' in headers)) {
    headers['Content-Type'] = 'application/json';
  }

  // Attach Authorization header when an access token exists in localStorage.
  // We check typeof window to ensure this code only runs in the browser.
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    const bodyText = await res.text();
    throw new Error(`API error ${res.status}: ${bodyText}`);
  }
  // If no content
  if (res.status === 204) return null;
  return res.json();
}

export { BASE_URL, apiFetch };
