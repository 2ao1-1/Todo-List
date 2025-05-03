// Function to set token in localStorage or sessionStorage based on remember me
export const setToken = (token: string, remember: boolean): void => {
  if (remember) {
    localStorage.setItem("token", token);
    sessionStorage.removeItem("token");
  } else {
    localStorage.removeItem("token");
    sessionStorage.setItem("token", token);
  }
};

// Function to get token from localStorage or sessionStorage
export const getToken = (): string | null => {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
};

// Function to remove token from both storages
export const removeToken = (): void => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

// Function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getToken();
};
