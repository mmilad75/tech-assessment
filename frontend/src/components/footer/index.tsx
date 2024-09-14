import CopyRight from "../copy-right";
import SocialMedia, { ISocialMediaProps } from "../social-media";

export interface IFooterProps {
  socialMedia: ISocialMediaProps[];
}

const Footer: React.FC<IFooterProps> = ({ socialMedia }) => {
  return (
    <footer className="container flex items-center py-2">
      <div className="flex gap-3">
        {socialMedia.map((item, index) => (
          <SocialMedia {...item} key={index} />
        ))}
      </div>
      <div className="flex flex-grow justify-center items-center">
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
