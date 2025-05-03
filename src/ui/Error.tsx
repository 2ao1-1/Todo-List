import { ReactNode } from "react";

interface ErrorProps {
  children: ReactNode;
}
export default function Error({ children }: ErrorProps) {
  return <div>{children}</div>;
}
