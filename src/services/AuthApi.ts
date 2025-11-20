import axios from "axios";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  UserProfile,
} from "../pages/Auth/types/AuthTypes";
import { getToken, removeToken, setToken } from "../utils/helper";

const API_URL =
  import.meta.env.VITE_API_URL || "https://todolistapi-2ao1.runasp.net";

function handleError(err: unknown): never {
  if (axios.isAxiosError(err)) {
    if (err.response?.status === 401) {
      removeToken();
      throw new Error("Authentication failed. Please login again.");
    }

    if (err.response?.status === 400) {
      throw new Error(err.response?.data?.message || "Invalid request data");
    }

    if (err.response?.status === 500) {
      throw new Error("Server error. Please try again later.");
    }

    throw new Error(err.response?.data?.message || "Request failed");
  }

  if (err instanceof Error) {
    throw err;
  }

  throw new Error("An unexpected error occurred");
}

export const registerUser = async (
  data: RegisterRequest
): Promise<AuthResponse> => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/register`, data);

    setToken(res.data.token, data.remember);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/login`, data);

    setToken(res.data.token, data.remember);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getUserProfile = async (): Promise<UserProfile> => {
  const token = getToken();

  if (!token) {
    throw new Error("User not authenticated");
  }

  try {
    const res = await axios.get<UserProfile>(`${API_URL}/api/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const logoutUser = (): void => {
  removeToken();
};
