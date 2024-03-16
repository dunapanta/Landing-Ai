interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
}

export const Button = ({ children, className, white, px }: Props) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className}`;
  return (
    <button className={`button-grad button-grad-g`}>
      <span>{children}</span>
    </button>
  );
};
