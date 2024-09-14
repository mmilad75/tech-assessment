import Image from "next/image";

const CopyRight: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-3 rounded-content bg-brand-gradient">
      <span>Powered by</span>
      <Image
        className="w-[108px] h-[19px]"
        src={require("../../assets/images/logo.png")}
        alt="absinthe"
      />
    </div>
  );
};

export default CopyRight;
