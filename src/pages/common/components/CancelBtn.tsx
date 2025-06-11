import { GoX } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type CancelBtnProps = {
  onClick?: () => void;
  type?: "toast" | "normal";
};

export function CancelBtn({ onClick, type = "normal" }: CancelBtnProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "toast") {
      toast.dismiss();
      if (onClick) onClick();
    } else {
      if (onClick) {
        onClick();
      } else {
        navigate(-1);
      }
    }
  };

  return (
    <button
      type="button"
      title="Cancel"
      onClick={handleClick}
      className={`p-1 md:p-1.5 bg-secondary/20 text-black hover:bg-secondary flex items-center gap-1.5 text-sm md:text-base 
       rounded-full h-5 w-5 `}
    >
      <GoX />
    </button>
  );
}
