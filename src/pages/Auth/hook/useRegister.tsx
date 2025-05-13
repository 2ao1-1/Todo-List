import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function useRegister() {
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const {
    register: CreateNewAcc,
    isLoading,
    error,
    isAuthenticated,
  } = useAuth();

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

  const onSubmit = (data: RegisterFormData) => {
    CreateNewAcc(data.name, data.email, data.password, remember);
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
