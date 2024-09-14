import HelpButton, { IHelpButtonProps } from "../help-button";
import Logo from "../logo";
import ProfileMenu, { IUser } from "../profile-menu";
import TabButton, { ITabButtonProps } from "../tab-button";
import MenuIcon from "@/assets/icons/menu.svg";
export interface IHeaderNavProps {
  tabs: ITabButtonProps[];
  helpButton: IHelpButtonProps;
  user: IUser;
}

const HeaderNav: React.FC<IHeaderNavProps> = ({ tabs, helpButton, user }) => {
  return (
    <header className="container h-[72px] flex h-ful items-center justify-between">
      <div className="flex flex-grow items-center">
        <Logo />
        <nav className="ml-6 hidden lg:flex items-center">
          {tabs.map((tab, index) => (
            <TabButton key={index} {...tab} />
          ))}
        </nav>
      </div>
      <div className="relative flex items-center space-x-3 h-[48px]">
        <div style={{ marginRight: "150px" }}>
          <HelpButton {...helpButton} />
        </div>
        <ProfileMenu user={user} />
        <div className="lg:hidden cursor-pointer">
          <MenuIcon />
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
