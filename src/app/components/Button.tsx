import { ReactNode } from "react";

type ButtonProps = {
  id: string;
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

const Button = ({ id, title, leftIcon, rightIcon, className }: ButtonProps) => {
  return (
    <button
      id={id}
      className={`w-fit cursor-pointer rounded-full bg-violet-50 ${className}`}
    >
      {leftIcon}
      <span className="font-general text-xs uppercase">{title}</span>
      {rightIcon}
    </button>
  );
};

export default Button;
