import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function NewTodoBtn({
  isOpen,
  type,
}: {
  isOpen?: boolean;
  type?: string;
}) {
  const navigate = useNavigate();

  const handleAddNewTodo = () => {
    navigate("/app/newTodo");
  };

  if (type === "dashboard") {
    return <OpenBtn onClick={handleAddNewTodo} />;
  }

  return (
    <OpenBtn onClick={handleAddNewTodo}>
      {isOpen && <span className="whitespace-nowrap">Add New Todo</span>}
    </OpenBtn>
  );
}

function OpenBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title="Add New Todo"
      className="flex items-center justify-center rounded-full text-left w-full p-2 hover:bg-accent bg-accent/80 text-card"
      onClick={onClick}
    >
      <span>
        <GoPlus />
      </span>
      {children}
    </button>
  );
}
