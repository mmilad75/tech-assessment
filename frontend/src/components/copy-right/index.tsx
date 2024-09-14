import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const CopyRight: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-3 rounded-content bg-brand-gradient">
      <span>Powered by</span>
      <Image className="w-[108px] h-[19px]" src={Logo} alt="absinthe" />
    </div>
  );
};

export default CopyRight;
