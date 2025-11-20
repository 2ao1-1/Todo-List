import axios from "axios";
import { getToken, removeToken } from "../utils/helper";

const API_URL =
  import.meta.env.VITE_API_URL || "https://todolistapi-2ao1.runasp.net";

export const api = axios.create({
  baseURL: `${API_URL}/api`,
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
    const { response } = error;

    if (!response) {
      console.error("Network error. Please check your connection.");
    } else {
      const { status } = response;

      switch (status) {
        case 401:
          console.warn("Unauthorized: Logging out user.");
          removeToken();
          window.location.href = "/login";
          break;

        case 403:
          console.warn("Forbidden: You don’t have permission.");
          break;

        case 500:
          console.warn("Server Error: Something went wrong on our side.");
          break;

        default:
          console.warn(`Unexpected error (Status: ${status})`);
          break;
      }
    }

    return Promise.reject(error);
  }
);
