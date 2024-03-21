import Link from "next/link";

interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  isDark?: boolean;
  href?: string;
}

export const Button = ({
  children,
  className,
  href,
  isDark,
  px,
  onClick,
}: Props) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors ${
    px || "px-7"
  } ${isDark ? "text-n-8" : "text-n-1"} ${className}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={`button-grad ${classes}`} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <Link href={href!} onClick={onClick} className={`button-grad ${classes}`}>
      <span className={spanClasses}>{children}</span>
    </Link>
  );

  return href ? renderLink() : renderButton();
};
