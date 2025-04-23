import useLogin from "../hooks/useLogin";
import FormUi from "../ui/AuthUi/FormUi";
import LogHeader from "../ui/AuthUi/LogHeader";

export default function Login() {
  const {
    form,
    handleChange,
    handleLogin,
    rememberMe,
    setRememberMe,
    error,
    loading,
  } = useLogin();

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center items-center py-20">
        <LogHeader type="login" />

        {/* form */}
        <div className="w-full max-w-md bg-card px-4 md:px-8 shadow-xl rounded-sm space-y-4 py-8">
          <FormUi
            type="login"
            formData={form}
            rememberMe={rememberMe}
            onFormChange={handleChange}
            onRememberMeChange={(value) => setRememberMe(value)}
            onSubmit={handleLogin}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
