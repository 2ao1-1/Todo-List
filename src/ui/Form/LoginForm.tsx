import FormRow from "./FormRow";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import RememberRow from "./RememberRow";
import SubmitButton from "./SubmitButton";
import useLogin from "../../hook/useLogin";
import { LoginFormData } from "../../hook/useLogin";

export default function LoginForm() {
  const {
    onSubmit,
    isLoading,
    register,
    handleSubmit,
    errors,
    setRemember,
    remember,
  } = useLogin();
  const loginRegister = register;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormRow label="Email" error={errors.email}>
        <EmailInput<LoginFormData>
          register={loginRegister}
          isLoading={isLoading}
        />
      </FormRow>

      <FormRow label="Password" error={errors.password}>
        <PasswordInput<LoginFormData>
          register={loginRegister}
          isLoading={isLoading}
        />
      </FormRow>

      <div className="sm:flex justify-between items-center space-x-2 pt-4">
        <RememberRow
          isLoading={isLoading}
          remember={remember}
          setRemember={setRemember}
        />

        <SubmitButton type="Sign In" isLoading={isLoading} />
      </div>
    </form>
  );
}
