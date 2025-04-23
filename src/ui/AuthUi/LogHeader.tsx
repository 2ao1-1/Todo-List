interface LogHeaderProps {
  type: "login" | "register" | "task";
}

export default function LogHeader({ type }: LogHeaderProps) {
  if (type === "register") {
    return (
      <h1 className="text-4xl font-bold mb-8">
        Create <span className="text-accent">New Account</span>
      </h1>
    );
  } else if (type === "login") {
    return (
      <h1 className="text-4xl font-bold mb-8">
        Welcome <span className="text-accent">Back</span>
      </h1>
    );
  } else {
    return (
      <h1 className="text-4xl font-bold mb-8">
        Organize <span className="text-accent">Your Daily</span> Tasks
      </h1>
    );
  }
}
