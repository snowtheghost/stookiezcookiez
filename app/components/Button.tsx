import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  icon?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-extrabold rounded-full transition-all duration-300 text-center border-4 hover:scale-105 active:scale-95 no-underline tracking-wide";

  const variants = {
    primary: "bg-[#f5f5f0] border-dark-teal text-dark-teal hover:bg-[#eeeee8] shadow-[0_6px_0_0_#385F6D] hover:shadow-[0_8px_0_0_#385F6D] active:shadow-[0_2px_0_0_#385F6D] active:translate-y-1",
    secondary: "bg-[#f5f5f0] border-amber-600 text-amber-800 hover:bg-[#eeeee8] shadow-[0_6px_0_0_#d97706] hover:shadow-[0_8px_0_0_#d97706] active:shadow-[0_2px_0_0_#d97706] active:translate-y-1",
    outline: "bg-[#f5f5f0] border-teal text-teal hover:bg-[#eeeee8] shadow-[0_6px_0_0_#4A7C8C] hover:shadow-[0_8px_0_0_#4A7C8C] active:shadow-[0_2px_0_0_#4A7C8C] active:translate-y-1",
  };

  const sizes = {
    sm: "px-8 py-3 text-sm min-w-[140px]",
    md: "px-12 py-4 text-base min-w-[180px]",
    lg: "px-16 py-6 text-2xl min-w-[220px]",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
