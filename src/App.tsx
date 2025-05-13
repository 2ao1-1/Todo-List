import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import NotFound from "./pages/NotFound";

import { AuthProvider } from "./pages/Auth/context/AuthContext";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import AppLayout from "./pages/Layout/AppLayout";

import TodoDetail from "./pages/Show/TodoDetail";
import CreateNewTodo from "./pages/Create/CreateNewTodo";

const handleError = (error: unknown) => {
  if (error instanceof Error) {
    toast.error(`🚨 ${error.message}`);
  } else {
    toast.error("⚠️ An unexpected error occurred.");
  }
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleError,
  }),
  mutationCache: new MutationCache({
    onError: handleError,
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      // refetchOnWindowFocus: false,
      // refetchOnReconnect: true,
      staleTime: 0,
      // cacheTime: 600000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* initial view */}
            <Route path="/" element={<Navigate replace to="/app" />} />

            {/* app view */}
            <Route path="/app" element={<AppLayout />}>
              <Route path="newTodo" element={<CreateNewTodo />} />
              <Route path=":todoId" element={<TodoDetail />} />
            </Route>

            {/* authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#1a1a1a",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
