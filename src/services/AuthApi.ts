import axios from "axios";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  UserProfile,
} from "../types/AuthTypes";
import { getToken, removeToken, setToken } from "../utils/helper";

const API_URL = "http://144.91.75.57:5012/api/auth";

function handleError(err: unknown): never {
  if (axios.isAxiosError(err)) {
    if (err.response?.status === 401) {
      removeToken();
    }
    throw new Error(err.response?.data?.message || "Failed to fetch");
  }
  throw err;
}

export const registerUser = async (
  data: RegisterRequest
): Promise<AuthResponse> => {
  try {
    const res = await axios.post(`${API_URL}/register`, data);

    // Save new token based on remember preference
    setToken(res.data.token, data.remember);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  try {
    const res = await axios.post(`${API_URL}/login`, data);

    // Save new token based on remember preference
    setToken(res.data.token, data.remember);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getUserProfile = async (): Promise<UserProfile> => {
  const token = getToken();

  if (!token) {
    throw new Error("No authentication token found");
  }

  try {
    const res = await axios.get<UserProfile>(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const logoutUser = () => {
  removeToken();
};
