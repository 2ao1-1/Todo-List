export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

export interface AuthResponse {
  user: UserProfile;
  token: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string, remember: boolean) => void;
  register: (
    name: string,
    email: string,
    password: string,
    remember: boolean
  ) => void;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  checkAuth: () => boolean;
}
