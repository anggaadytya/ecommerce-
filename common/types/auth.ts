export interface inputType {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  hidePassword?: () => void;
  showPassword?: boolean;
}

export interface buttonType {
  type: "button" | "submit" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
