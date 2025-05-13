import CreateHead from "./components/CreateHead";
import CreateForm from "./components/CreateForm";
import useCancel from "../common/hook/useCancel";

export default function CreateNewTodo() {
  const handleClose = useCancel();

  return (
    <div
      className="absolute top-0 inset-0 bg-secondary/50 flex justify-center items-center overflow-hidden z-50"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <CreateHead />

        <CreateForm />
      </div>
    </div>
  );
}
