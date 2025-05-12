import Form from "./components/Form";
import RedirectBtn from "./components/RedirectBtn";
import BreakLine from "./components/BreakLine";

export default function Register() {
  return (
    <div className="bg-accent min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white p-4 shadow-2xl overflow-hidden">
        <div className="px-8 pt-8 pb-6 text-center">
          {/* login head */}
          <h2 className="text-3xl font-semibold text-gray-800">
            Create a new account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please fill in the form below
          </p>
        </div>

        <div className="px-8 pb-8">
          {/* form body */}
          <Form type="register" />

          <BreakLine />
          {/* redirect button */}
          <div className="mt-4">
            <RedirectBtn type="register" />
          </div>
        </div>
      </div>
    </div>
  );
}
