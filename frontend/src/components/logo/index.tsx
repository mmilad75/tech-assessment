import Link from "next/link";

export interface ILogoProps {
  text: string
}

const Logo: React.FC<ILogoProps> = ({text}) => {
  return (
    <div className="px-3 flex bg-white">
      <Link href='' className="rounded-lg font-medium border h-[32px] w-[122px] text-center content-center">
        {text}
      </Link>
    </div>
  )
};

export default Logo;