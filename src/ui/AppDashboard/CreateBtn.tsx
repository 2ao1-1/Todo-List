import useDashBoard from "../../hooks/useDashBoard";

interface CreateBtnProps {
  isOpen: boolean;
}

export default function CreateBtn({ isOpen }: CreateBtnProps) {
  const { handleCreateTodo } = useDashBoard();
  return (
    <button
      onClick={handleCreateTodo}
      className="m-4 p-2 bg-accent text-card rounded-md hover:bg-accent/80 transition-colors flex items-center justify-center gap-2 fixed bottom-0 z-50"
    >
      <span>+</span>
      {isOpen && <span>Add New List</span>}
    </button>
  );
}
