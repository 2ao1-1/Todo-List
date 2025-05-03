import Form from "../ui/Form/Form";
import RedirectBtn from "../ui/RedirectBtn";

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

          <div className="relative my-6 items-center flex justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm items-center">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
          {/* redirect button */}
          <div className="mt-4">
            <RedirectBtn type="register" />
          </div>
        </div>
      </div>
    </div>
  );
}
