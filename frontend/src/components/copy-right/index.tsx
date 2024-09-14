import Image from "next/image";

const CopyRight: React.FC = () => {
  return (
    <div className="flex w-fit justify-center items-center p-3 rounded-content bg-gradient-to-r from-primary-500/10  to-primary-500/5 border border-primary-500">
      <span>Powered by</span>
      <Image 
        className="w-[108px] h-[19px]"
        src={require('../../assets/images/logo.png')}
        alt="absinthe"
      />
    </div>
  )
};

export default CopyRight;