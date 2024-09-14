import Image from "next/image";
import Link from "next/link";

export interface IProfileButtonProps {
  image: string;
  text: string;
  link?: string
}

const ProfileButton: React.FC<IProfileButtonProps> = ({
  image, 
  text, 
  link = ''
}) => {
  return (
    <div >
      <Link className="bg-elevation-3 w-fit flex px-4 py-[10px] rounded-xl" href={link}>
        <Image 
          className="w-[18px] h-[18px] object-cover rounded-full"
          src={image}
          alt={text}
        />
        <span className="font-semibold text-sm ml-3">{text}</span>
      </Link>
    </div>
  )
}

export default ProfileButton;