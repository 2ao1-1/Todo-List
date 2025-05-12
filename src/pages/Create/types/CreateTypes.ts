import { UseFormRegister } from "react-hook-form";
import { RegisterFormData } from "../../Auth/types/componentsType";

export type NameInputProps = {
  register: UseFormRegister<RegisterFormData>;
  isLoading: boolean;
};
