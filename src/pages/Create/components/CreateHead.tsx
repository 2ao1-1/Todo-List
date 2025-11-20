import { CancelBtn } from "../../common/components/CancelBtn";

export default function CreateHead() {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="flex-1 text-xl font-bold">Create New Todo List</h2>
      <CancelBtn />
    </div>
  );
}
