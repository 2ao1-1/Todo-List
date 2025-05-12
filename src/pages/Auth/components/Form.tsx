import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface FormProps {
  type: "signin" | "register";
}

export default function Form({ type }: FormProps) {
  if (type === "signin") return <LoginForm />;
  if (type === "register") return <RegisterForm />;
  return null;
}
