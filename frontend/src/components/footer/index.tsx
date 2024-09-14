import CopyRight from "../copy-right";
import SocialMedia, { ISocialMediaProps } from "../social-media";

export interface IFooterProps {
  socialMedia: ISocialMediaProps[]
};

const Footer: React.FC<IFooterProps> = ({socialMedia}) => {
  return (
    <footer className="w-[1440px] h-[49px] px-10 flex">
      <div className="flex justify-center items-center gap-3">
        {socialMedia.map((item, index) => (
          <SocialMedia {...item} key={index} />
        ))}
      </div>
      <div className="flex w-[950px] px-5 py-3 justify-center items-center">
        <CopyRight />
      </div>
    </footer>
  );
}

export default Footer;