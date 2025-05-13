import { Link } from "react-router-dom";

interface dirBtnProps {
  type: string;
}
export default function RedirectBtn({ type }: dirBtnProps) {
  if (type === "signin")
    return (
      <div className="text-center mt-4 text-sm">
        <p className="text-gray-600 mb-1">Don't have an account?</p>
        <Link
          to="/register"
          className="text-accent/80 hover:text-accent font-medium transition-colors"
        >
          Create New Account
        </Link>
      </div>
    );

  if (type === "register")
    return (
      <div className="text-center mt-4 text-sm">
        <p className="text-gray-600 mb-1">Already have an account?</p>
        <Link
          to="/login"
          className="text-accent/80 hover:text-accent font-medium transition-colors"
        >
          Sign in
        </Link>
      </div>
    );
}
