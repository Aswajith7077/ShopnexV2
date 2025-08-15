import { decrypt, encrypt } from "@/algorithm/crypto";
import { API_ENDPOINTS, BASE_URL, getEndPoint } from "@/constants/api.enpoints";
import { ELOCAL_STORAGE, REQUEST_METHODS } from "@/constants/api.enum";
import { LoginResponseType } from "@/types/api/auth.type";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult
} from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toast } from "sonner";

const getAuthToken = (): string | null => {
  try {
    const authStorage = localStorage.getItem(ELOCAL_STORAGE.AUTH_STORE) ?? "";
    const { state } = JSON.parse(decrypt(authStorage));
    return state?.access_token ?? null;
  } catch (_error) {
    return null;
  }
};

const readCredentials = ():LoginResponseType | null => {
  try {
    const authStorage = localStorage.getItem(ELOCAL_STORAGE.AUTH_STORE) ?? "";
    const { state } = JSON.parse(decrypt(authStorage));
    return state;
  } catch (_error) {
    return null;
  }
};

const writeCredentials = (credentials: LoginResponseType) => {
  try {
    const serialized_data = encrypt(JSON.stringify({ state: credentials }));
    localStorage.setItem(ELOCAL_STORAGE.AUTH_STORE, serialized_data);
    return true;
  } catch (_error) {
    toast("Error in Writing text");
    return false;
  }
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use((config) => {
  const authToken = getAuthToken();
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(ELOCAL_STORAGE.AUTH_STORE);
    }
    return Promise.reject(error);
  }
);

const apiRequest = async <TRequest = unknown, TResponse = unknown>(
  endpoint: API_ENDPOINTS,
  method: REQUEST_METHODS,
  data?: TRequest,
  isAuthRequired: boolean = false,
  customConfig?: AxiosRequestConfig
): Promise<TResponse> => {
  const url: string = getEndPoint(endpoint);
  const isFormData = data instanceof FormData;
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-type": isFormData ? "multipart/form-data" : "application/json"
  };

  if (isAuthRequired) {
    const token = getAuthToken();
    headers.Authorization = token ? `Bearer ${token}` : "";
  }

  const config: AxiosRequestConfig = {
    method,
    url,
    headers: headers,
    ...(method === REQUEST_METHODS.GET ? { params: data } : { data }),
    ...customConfig
  };
  const response = await axiosInstance.request<TResponse>(config);
  return response.data;
};

const useApiQuery = <TResponse>(
  endpoint: API_ENDPOINTS,
  params?: Record<string, unknown>,
  requiresAuth: boolean = false
): UseQueryResult<TResponse, AxiosError> => {
  return useQuery({
    queryKey: [endpoint, params],
    queryFn: () =>
      apiRequest<Record<string, unknown>, TResponse>(
        endpoint,
        REQUEST_METHODS.GET,
        params,
        requiresAuth
      )
  });
};

const useApiMutation = <TRequest, TResponse>(
  endpoint: API_ENDPOINTS,
  method: REQUEST_METHODS,
  requiresAuth: boolean = true
): UseMutationResult<TResponse, AxiosError, TRequest> => {
  return useMutation({
    mutationFn: (data: TRequest) =>
      apiRequest<TRequest, TResponse>(endpoint, method, data, requiresAuth)
  });
};

export { useApiMutation, useApiQuery, writeCredentials, readCredentials };
