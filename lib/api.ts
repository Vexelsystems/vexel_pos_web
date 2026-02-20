import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

/**
 * AXIOS INSTANCE CONFIGURATION
 * Logic:
 * - Decouples API base URL from individual calls.
 * - Automatically injects Authorization header if token exists.
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Logic: Request Interceptor to attach the token dynamically before every request
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("vexel_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Logic: Response Interceptor for unified error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    const errorData = error.response?.data as { error?: string } | undefined;
    const errorMessage = errorData?.error || error.message || "System error";
    console.error(
      `API Failure [${error.config?.method?.toUpperCase()}] ${error.config?.url}:`,
      errorMessage,
    );
    return Promise.reject(new Error(errorMessage));
  },
);

export const api = {
  post: (endpoint: string, data: any): Promise<any> =>
    apiClient.post(endpoint, data),
  get: (endpoint: string): Promise<any> => apiClient.get(endpoint),
  put: (endpoint: string, data: any): Promise<any> =>
    apiClient.put(endpoint, data),
  delete: (endpoint: string): Promise<any> => apiClient.delete(endpoint),
};

// Logic: Legacy compatibility for anything still using apiFetch (if any)
export const apiFetch = async (endpoint: string, options: any = {}) => {
  const { method = "GET", body, headers } = options;
  try {
    const config = {
      method,
      url: endpoint,
      data: body ? JSON.parse(body) : undefined,
      headers,
    };
    return await apiClient(config);
  } catch (err: any) {
    throw err;
  }
};
