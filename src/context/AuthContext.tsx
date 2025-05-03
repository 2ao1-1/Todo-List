import { createContext, useContext, useState } from "react";
import {
  AuthContextType,
  LoginRequest,
  RegisterRequest,
} from "../types/AuthTypes";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getUserProfile,
  loginUser,
  registerUser,
  logoutUser,
} from "../services/AuthApi";
import { isAuthenticated } from "../utils/helper";

// 1- create context
const AuthContext = createContext<AuthContextType | null>(null);

// 2- context Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);

  // Query user data
  const { data: user, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: getUserProfile,
    enabled: isAuthenticated(), // We don't want to execute the query if there is no token (no token no query)
    retry: false,
    staleTime: 300000, //5 min
  });

  const loginMutation = useMutation({
    mutationFn: (Credentials: LoginRequest) => loginUser(Credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userData"] });
      navigate("/app");
      setError(null);
    },
    onError: (error: Error) => {
      setError(error.message);
    },
  });

  const login = (email: string, password: string, remember: boolean) => {
    loginMutation.mutate({ email, password, remember });
  };

  const registerMutation = useMutation({
    mutationFn: (Credentials: RegisterRequest) => registerUser(Credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userData"] });
      navigate("/app");
      setError(null);
    },
    onError: (error: Error) => {
      setError(error.message);
    },
  });

  const register = (
    name: string,
    email: string,
    password: string,
    remember: boolean
  ) => {
    registerMutation.mutate({ name, email, password, remember });
  };

  const logout = () => {
    logoutUser();
    queryClient.removeQueries({ queryKey: ["userProfile"] });
    navigate("/login");
  };

  const contextValue: AuthContextType = {
    user: user || null,
    isLoading: isLoading || loginMutation.isPending,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    error,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// 3- context hook: Helper Hook to use the authentication context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider.");
  }
  return context;
}
