import { Todo } from "../../common/types";

export type logoutType = {
  handleUserbadge: () => void;
  logout: () => void;
};

export type UserBadgeProps = {
  handleUserbadge: () => void;
  userName: string | undefined;
};

export type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export type TodoUnitProps = {
  type: string;
  isOpen: boolean;
  typeData: Todo[];
};

export type SideTodoItemProps = {
  id: number;
  title: string;
  icon: string;
  isOpen: boolean;
  type: string;
};

export type HeaderProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export type OpenProps = { isOpen: boolean };
