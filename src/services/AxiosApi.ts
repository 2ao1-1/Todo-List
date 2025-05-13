import axios from "axios";
import { getToken, removeToken } from "../utils/helper";

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const { res } = error;

    if (!res) {
      console.error("Network error. Please check your connection.");
    } else if (res.status === 401) {
      console.error("Authentication error. Please login again.");

      removeToken();
      window.location.href = "/login";
    } else if (res.status === 403) {
      console.error("You don't have permission to perform this action.");
    } else if (res.status === 500) {
      console.error("Server error. Please try again later.");
    }

    return Promise.reject(error);
  }
);
