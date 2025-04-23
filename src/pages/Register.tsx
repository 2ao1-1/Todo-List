import useRegister from "../hooks/useRegister";
import FormUi from "../ui/AuthUi/FormUi";
import LogHeader from "../ui/AuthUi/LogHeader";

export default function Register() {
  const {
    form,
    handleChange,
    handleRegister,
    rememberMe,
    setRememberMe,
    error,
    loading,
  } = useRegister();

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center items-center py-20">
        <LogHeader type="register" />

        {/* form */}
        <div className="w-full max-w-md bg-card px-4 md:px-8 shadow-xl rounded-sm space-y-4 py-8">
          <FormUi
            type="register"
            formData={form}
            rememberMe={rememberMe}
            onFormChange={handleChange}
            onRememberMeChange={(value) => setRememberMe(value)}
            onSubmit={handleRegister}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
