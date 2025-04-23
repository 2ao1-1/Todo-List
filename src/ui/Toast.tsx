interface ToastProps {
  type: "error" | "success";
  message: string;
}

export function Toast({ type, message }: ToastProps) {
  const bgColor = type === "error" ? "bg-red-500" : "bg-green-500";

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-4 py-2 rounded-md shadow-lg animate-fade-in`}
    >
      {message}
    </div>
  );
}
