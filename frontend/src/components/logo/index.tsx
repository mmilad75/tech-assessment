import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="px-3 flex bg-white">
      <Link
        href=""
        className="logo rounded-lg font-medium border h-[32px] w-[122px] text-center content-center"
      >
        Logo
      </Link>
    </div>
  );
};

export default Logo;
