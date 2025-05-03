import useRegister, { RegisterFormData } from "../../hook/useRegister";
import FormRow from "./FormRow";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import RememberRow from "./RememberRow";

export default function RegisterForm() {
  const {
    onSubmit,
    isLoading,
    register,
    handleSubmit,
    errors,
    setRemember,
    remember,
  } = useRegister();
  const registerRegister = register;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormRow label="Name" error={errors.name}>
        <NameInput register={registerRegister} isLoading={isLoading} />
      </FormRow>

      <FormRow label="Email" error={errors.email}>
        <EmailInput<RegisterFormData>
          register={registerRegister}
          isLoading={isLoading}
        />
      </FormRow>

      <FormRow label="Password" error={errors.password}>
        <PasswordInput<RegisterFormData>
          register={registerRegister}
          isLoading={isLoading}
        />
      </FormRow>

      <div className="sm:flex justify-between items-center space-x-2 pt-4">
        <RememberRow
          isLoading={isLoading}
          remember={remember}
          setRemember={setRemember}
        />

        <SubmitButton type="Register" isLoading={isLoading} />
      </div>
    </form>
  );
}
