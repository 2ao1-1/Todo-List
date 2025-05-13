import { useNavigate } from "react-router-dom";

export default function useCancel() {
  const navigate = useNavigate();
  const handleClose = () => navigate("/app");
  return handleClose;
}
