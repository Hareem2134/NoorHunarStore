import { QueryClient } from "@tanstack/react-query";

// NEW: Determine the base URL for the API
// On the server (SSR) or in production, it uses the Vercel URL.
// In local development, it uses an empty string (for proxying).
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // We are on the client side
    return ''; 
  }
  // We are on the server side
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Default for local server-side rendering
  return 'http://localhost:5000';
};

export const API_BASE_URL = getBaseUrl();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function apiRequest(
  method: HttpMethod,
  path: string,
  body?: Record<string, any>
): Promise<Response> {
  const url = `${API_BASE_URL}${path}`;
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  console.log(`Making API request to: ${url}`); // Add this log for debugging

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response;
}