import NewTodo from "../../common/components/NewTodoBtn";

export default function NoTodo() {
  return (
    <div className="text-center py-12 h-full bg-main space-y-8 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <NewTodo isOpen={true} type="dashboard" />
      </div>
      <h3 className="text-xl font-medium text-gray-500">
        No Todo Lists Yet? Add One Now.
      </h3>
      <p className="mt-2 text-gray-400">
        Click the button above to create your first todo list!
      </p>
    </div>
  );
}
