import { SubmitBtnProps } from "../types/componentsType";

export default function SubmitButton({ isLoading, type }: SubmitBtnProps) {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        disabled={isLoading}
        className="bg-accent text-card px-8 py-1  hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {type}
      </button>
    </div>
  );
}
