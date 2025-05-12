import { UseFormRegister } from "react-hook-form";

export type CancelBtnProps = {
  type?: string;
  onClick?: () => void;
};

export type ControlerProps = { onClick: (value: boolean) => void };

export type CreatebtnProps = { isSubmitting: boolean };

export type deleteBtbProps = { id: number; title: string };

export type EditIconProps = {
  handleIconSelect: (emoji: { native: string }) => void;
  editTodoIcon: string | undefined;
};

export type IconProps = {
  handleSelectEmoji: (emoji: { native: string }) => void;
};

export type IconBtnProps = {
  onClick: () => void;
  newIcon: string | undefined;
};

export type IconPickerprops = {
  handleShowIcon: () => void;
  handleSelectEmoji: (emoji: { native: string }) => void;
  showPicker: boolean;
  watch: (name: string) => string;
};

export type NewTodoBtnProps = {
  isOpen?: boolean;
  type?: string;
};

export interface FormInputs {
  title: string;
  icon: string;
}
export type NewTodoInputProps = {
  register: UseFormRegister<FormInputs>;
};

export type OpenSideBtnProps = {
  view: "head" | "side";
  isOpen: boolean;
  toggleSidebar: () => void;
};

export type SaveBtnProps = {
  isEditing?: boolean;
  onClick?: () => void;
};

export type SaveControlProps = {
  saveOnClick?: () => void;
  isEditing?: boolean;
};

export type SideBarBtnsProps = {
  toggleSidebar: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};
