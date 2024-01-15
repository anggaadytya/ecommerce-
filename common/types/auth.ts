export interface inputType {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
}

export interface buttonHideType {
  showPassword: boolean;
  handleHidePassword: () => void;
  className?: string;
}

export interface buttonType {
  type: "button" | "submit" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface layoutAuthType {
  title: string;
  children: React.ReactNode;
  link: string;
  linkTitle: string;
  linkText: string;
}
