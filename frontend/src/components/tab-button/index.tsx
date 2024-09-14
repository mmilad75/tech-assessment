import clsx from "clsx";
import Link from "next/link";

export interface ITabButtonProps {
  text: string;
  link: string;
  state?: "active" | "default";
}

const TabButton: React.FC<ITabButtonProps> = ({
  text,
  link,
  state = "default",
}) => {
  return (
    <Link
      href={link}
      className={clsx(
        "inline-block text-sm px-4 py-[10px] ",
        "hover:text-primary-300 transition-colors transition-300",
        state === "default" ? "text-text-primary" : "text-primary-300"
      )}>
      {text}
    </Link>
  );
};

export default TabButton;
