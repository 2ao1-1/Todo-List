import axios from "axios";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  UserProfile,
} from "../types/AuthTypes";

import { setToken, removeToken } from "./authToken";

const API_URL = "http://localhost:5000/api/auth";

// register : post new user data to get token
export const RegisterNewUser = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const res = await axios.post<RegisterResponse>(`${API_URL}/register`, data);

  // Clear old token if exists
  removeToken();

  // Save new token
  setToken(res.data.token);

  return res.data;
};

// login : post user data to get token
export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await axios.post<LoginResponse>(`${API_URL}/login`, data);

  // Clear old token if exists
  removeToken();

  // Save new token
  setToken(res.data.token);

  return res.data;
};

// get all user data
export const userProfile = async (token: string): Promise<UserProfile> => {
  const res = await axios.get<UserProfile>(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
