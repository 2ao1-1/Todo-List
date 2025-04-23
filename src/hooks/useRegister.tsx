import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterNewUser } from "../services/AuthApi";
import { RegisterRequest } from "../types/AuthTypes";

export default function useRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Auto-login check
  useEffect(() => {
    const checkExistingToken = () => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token) {
        // If token exists, redirect to app
        navigate("/app");
      }
    };

    checkExistingToken();
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setError(null);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { token, name } = await RegisterNewUser(form);
      saveUserData(token, name);
      navigate("/app");
    } catch (error: any) {
      console.error("Registration failed:", error);
      setError(
        error.response?.data?.message ||
          "Registration failed. Please check your information or try a different email."
      );
    } finally {
      setLoading(false);
    }
  };

  // Save token and user name based on rememberMe preference
  const saveUserData = (token: string, name: string) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem("token", token);
    storage.setItem("userName", name);
  };

  return {
    handleChange,
    form,
    handleRegister,
    rememberMe,
    setRememberMe,
    error,
    loading,
  };
}
