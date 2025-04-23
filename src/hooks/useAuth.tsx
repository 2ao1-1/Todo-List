import { useState, ChangeEvent, FormEvent } from "react";
import { FormFields } from "../ui/AuthUi/FormUi";

type AuthFormHook = {
  initialState?: Partial<FormFields>;
  onSubmit: (formData: FormFields, rememberMe: boolean) => Promise<void>;
};

export default function useAuth({ initialState = {}, onSubmit }: AuthFormHook) {
  const [formData, setFormData] = useState<FormFields>({
    email: "",
    password: "",
    name: "",
    ...initialState,
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await onSubmit(formData, rememberMe);
    } catch (err: any) {
      setError(
        err.message || "Authentication failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    rememberMe,
    setRememberMe,
    handleChange,
    handleSubmit,
    error,
    loading,
  };
}
