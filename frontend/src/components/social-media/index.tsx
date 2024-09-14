import Link from "next/link";

export interface ISocialMediaProps {
  Icon: string;
  link: string;
}

const SocialMedia: React.FC<ISocialMediaProps> = ({ Icon, link }) => {
  return (
    <div className="h-8 w-8 bg-elevation-3 rounded-xl flex justify-center items-center">
      <Link href={link}>
        <Icon />
      </Link>
    </div>
  );
};

export default SocialMedia;
