import Link from "next/link";

export interface IHelpButtonProps {
  text: string;
  link: string;
}

const HelpButton: React.FC<IHelpButtonProps> = ({text, link}) => {
  return (
    <div className="px-5 py-3 border w-fit rounded-[32px] border-primary-300">
      <Link href={link} className="content-center text-text-secondary">
        {text}
      </Link>
    </div>
  )
}

export default HelpButton;