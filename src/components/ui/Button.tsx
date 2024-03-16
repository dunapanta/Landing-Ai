interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  isDark?: boolean;
}

export const Button = ({ children, className, isDark, px }: Props) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors ${
    px || "px-7"
  } ${isDark ? "text-n-8" : "text-n-1"} ${className}`;

  const spanClasses = "relative z-10";
  return (
    <button className={`button-grad ${classes}`}>
      <span className={spanClasses}>{children}</span>
    </button>
  );
};
