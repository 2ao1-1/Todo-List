import InputUi from "./InputUi";
import { Link } from "react-router-dom";

export type FormFields = {
  email: string;
  password: string;
  name?: string;
};

type AuthForm = {
  type: "login" | "register";
  formData: FormFields;
  rememberMe: boolean;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRememberMeChange: (value: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  error?: string | null;
  loading?: boolean;
};

export default function FormUi({
  type,
  formData,
  rememberMe,
  onFormChange,
  onRememberMeChange,
  onSubmit,
  error,
  loading = false,
}: AuthForm) {
  const isRegister = type === "register";

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4 flex flex-col">
        {isRegister && (
          <InputUi
            title="Name"
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={onFormChange}
          />
        )}
        <InputUi
          title="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={onFormChange}
        />
        <InputUi
          title="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={onFormChange}
        />

        {/* Error message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {/* remember me btn */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => onRememberMeChange(!rememberMe)}
            className="w-6 h-6"
            id="rememberMe"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`bg-accent text-card px-4 py-2 rounded-md hover:bg-accent/80 transition-colors ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Please wait..." : isRegister ? "Register Now" : "Login"}
        </button>
      </form>
      <div className="text-center mt-4">
        {isRegister ? (
          <Link className="text-accent hover:underline" to="/">
            Already have an account? Sign in
          </Link>
        ) : (
          <Link className="text-accent hover:underline" to="/register">
            Don't have an account? Create New Account
          </Link>
        )}
      </div>
    </>
  );
}
