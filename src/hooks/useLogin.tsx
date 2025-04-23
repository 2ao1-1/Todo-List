import { useState, useEffect } from "react";
import { loginUser } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../types/AuthTypes";

export default function useLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginRequest>({
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
        // Verify token validity before navigating (optional)
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { token, name } = await loginUser(form);
      saveUserData(token, name);
      navigate("/app");
    } catch (error: any) {
      console.error("Login failed:", error);
      setError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  // Save token based on rememberMe preference
  const saveUserData = (token: string, name: string) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem("token", token);
    storage.setItem("userName", name);
  };

  return {
    handleChange,
    form,
    handleLogin,
    rememberMe,
    setRememberMe,
    error,
    loading,
  };
}
