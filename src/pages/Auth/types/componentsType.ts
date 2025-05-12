import { Dispatch, ReactElement, SetStateAction } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export interface FormRowProps {
  label: string;
  children: ReactElement;
  error?: { message?: string };
}

export interface EmailInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  isLoading: boolean;
}

export interface PasswordInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  isLoading: boolean;
}

export interface RememberRowProps {
  isLoading: boolean;
  remember: boolean;
  setRemember: Dispatch<SetStateAction<boolean>>;
}

export interface SubmitBtnProps {
  isLoading: boolean;
  type: string;
}

export interface dirBtnProps {
  type: string;
}

export interface NameInputProps {
  register: UseFormRegister<RegisterFormData>;
  isLoading: boolean;
}
