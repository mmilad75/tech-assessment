import clsx from "clsx";

type TagVariant = "primary" | "secondary" | "success";

interface ITagProps {
  variant?: TagVariant;
  className?: string;
}

const variantClassNames: { [key in TagVariant]: string } = {
  primary: "bg-primary-100 text-primary-300",
  secondary: "bg-elevation-3 text-text-secondary",
  success: "bg-success-elevation1 text-success",
};

const Tag: React.FC<React.PropsWithChildren<ITagProps>> = ({
  variant = "primary",
  className,
  children,
}) => {
  return (
    <span
      className={clsx(
        "text-xs font-medium py-2 px-3 rounded-corner",
        variantClassNames[variant],
        className
      )}>
      {children}
    </span>
  );
};

export default Tag;
