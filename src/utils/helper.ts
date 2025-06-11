const TOKEN_KEY = "token";

// Set token in localStorage or sessionStorage
export const setToken = (token: string, remember: boolean): void => {
  if (remember) {
    localStorage.setItem(TOKEN_KEY, token);
    sessionStorage.removeItem(TOKEN_KEY);
  } else {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }
};

// Get token from either localStorage or sessionStorage
export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
};

//Remove token from both storages
export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
};

// Function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getToken();
};
