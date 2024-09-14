import clsx from "clsx";
import Link from "next/link";

export interface ITabButtonProps {
  text: string;
  link: string;
  state?: "active" | "default"
}

const TabButton: React.FC<ITabButtonProps> = ({
  text, 
  link,
  state = 'default'
}) => {
  return (
    <div className={clsx("flex px-4 h-[40px] w-fit", state === 'default' ? 'text-text-primary' : 'text-primary-300')}>
      <Link href={link} className="content-center">
        {text}
      </Link>
    </div>
  )
};

export default TabButton;