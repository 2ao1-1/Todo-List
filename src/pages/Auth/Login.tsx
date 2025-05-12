import RedirectBtn from "./components/RedirectBtn";
import BreakLine from "./components/BreakLine";
import Form from "./components/Form";

export default function Login() {
  return (
    <div className="bg-accent min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white p-4 shadow-2xl overflow-hidden">
        <div className="px-8 pt-8 pb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Sign in to access your account</p>
        </div>
        <div className="px-8 pb-8">
          {/* form body */}
          <Form type="signin" />

          <BreakLine />

          {/* redirect button */}
          <div className="mt-4">
            <RedirectBtn type="signin" />
          </div>
        </div>
      </div>
    </div>
  );
}
