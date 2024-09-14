import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

export interface IProfileButtonProps {
  icon?: string | ReactNode;
  iconPlacement?: "start" | "end";
  text: string;
  link?: string;
  onClick?: () => void;
  isActive?: boolean;
  isBlock?: boolean;
  className?: string;
}

const ProfileButton: React.FC<IProfileButtonProps> = ({
  icon = null,
  iconPlacement = null,
  text,
  link = "",
  onClick,
  isActive = false,
  isBlock = false,
  className,
}) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!onClick) return;

    e.preventDefault(); // prevent navigation
    onClick();
  };
  return (
    <Link
      className={clsx(
        isBlock ? "flex" : "inline-flex",
        " items-center justify-center px-4 py-[10px] rounded-xl cursor-pointer",
        "bg-elevation-3 hover:bg-elevation-1",
        "transition-colors transition-300",
        isActive && "bg-elevation-1",
        className
      )}
      href={link}
      onClick={handleClick}>
      {icon && iconPlacement === "start" && <div className="mr-3">{icon}</div>}

      <span className="font-semibold text-sm">{text}</span>

      {icon && iconPlacement === "end" && <div className="ml-3">{icon}</div>}
    </Link>
  );
};

export default ProfileButton;
