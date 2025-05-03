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

import { AuthProvider } from "./context/AuthContext";

import AppLayout from "./pages/AppLayout";
import TodosView from "./pages/TodosView";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
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
              <Route index element={<TodosView />} />
              <Route path="new" element={<p>new todo</p>} />
              <Route path=":todoId" element={<p>#id todo</p>} />
            </Route>

            {/* authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 404 page */}
            <Route path="*" element={<p>404 page not found</p>} />
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
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
