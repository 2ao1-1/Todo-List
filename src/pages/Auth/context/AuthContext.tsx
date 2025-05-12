import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  AuthContextType,
  LoginRequest,
  RegisterRequest,
} from "../types/AuthTypes";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getUserProfile,
  loginUser,
  registerUser,
  logoutUser,
} from "../../../services/AuthApi";
import { isAuthenticated } from "../../../utils/helper";
import toast from "react-hot-toast";

// 1- create context
const AuthContext = createContext<AuthContextType | null>(null);

// 2- context Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);
  const [redirectPath, setRedirectPath] = useState<string>("/app");

  useEffect(() => {
    if (location.pathname !== "/login" && location.pathname !== "/register") {
      setRedirectPath(location.pathname);
    }
  }, [location.pathname]);

  // Query user data
  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: getUserProfile,
    enabled: isAuthenticated(),
    retry: 1,
    staleTime: 0,
  });

  const loginMutation = useMutation({
    mutationFn: (Credentials: LoginRequest) => loginUser(Credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userData"] });
      navigate(redirectPath || "/app");
      setError(null);
      toast.success("Login successful!");
    },
    onError: (error: Error) => {
      setError(error.message);
      toast.error(`Login failed: ${error.message}`);
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
      toast.success("Registration successful!");
    },
    onError: (error: Error) => {
      setError(error.message);
      toast.error(`Registration failed: ${error.message}`);
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
    queryClient.invalidateQueries();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  // Check authentication status
  const checkAuth = () => {
    if (isAuthenticated()) {
      if (!user) {
        queryClient.invalidateQueries({ queryKey: ["userData"] });
      }
      return true;
    }
    return false;
  };

  const contextValue: AuthContextType = {
    user: user || null,
    isLoading:
      isUserLoading || loginMutation.isPending || registerMutation.isPending,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    error,
    checkAuth,
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
