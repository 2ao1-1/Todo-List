import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { LoginFormData } from "../types/componentsType";

export default function useLogin() {
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const { login, isLoading, error, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const onSubmit = (data: LoginFormData) => {
    login(data.email, data.password, remember);
  };
  return {
    onSubmit,
    isLoading,
    register,
    handleSubmit,
    errors,
    setRemember,
    remember,
  };
}
