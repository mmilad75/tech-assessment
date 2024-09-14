import Link from "next/link";
import CopyRight from "../copy-right";
import Logo from "../logo";
import SocialMedia, { ISocialMediaProps } from "../social-media";

export interface IFooterLink {
  title: string;
  href: string;
}
export interface IFooterProps {
  socialMedia: ISocialMediaProps[];
  links: IFooterLink[];
}

const Footer: React.FC<IFooterProps> = ({ socialMedia, links }) => {
  return (
    <footer className="relative container flex flex-wrap items-center py-2  lg:flex-nowrap">
      <div className="flex items-center justify-between w-full mb-7 lg:mb-0 lg:w-auto">
        <div className="lg:hidden">
          <Logo />
        </div>
        <div className="flex gap-3">
          {socialMedia.map((item, index) => (
            <SocialMedia {...item} key={index} />
          ))}
        </div>
      </div>

      <nav className="w-full mb-6 flex justify-between flex-wrap lg:hidden">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.title}
          </Link>
        ))}
      </nav>

      <div className="flex flex-grow justify-center items-center w-full lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
