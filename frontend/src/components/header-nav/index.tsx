import HelpButton, { IHelpButtonProps } from "../help-button";
import Logo from "../logo";
import ProfileButton, { IProfileButtonProps } from "../profile-button";
import TabButton, { ITabButtonProps } from "../tab-button";
import MenuIcon from "@/assets/icons/menu.svg";
export interface IHeaderNavProps {
  tabs: ITabButtonProps[];
  helpButton: IHelpButtonProps;
  profileButton: IProfileButtonProps;
}

const HeaderNav: React.FC<IHeaderNavProps> = ({
  tabs,
  helpButton,
  profileButton,
}) => {
  return (
    <header className="container h-[72px] flex h-ful items-center  justify-between">
      <div className="flex flex-grow items-center">
        <Logo />
        <nav className="ml-6 hidden lg:flex items-center">
          {tabs.map((tab, index) => (
            <TabButton key={index} {...tab} />
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <HelpButton {...helpButton} />
        <ProfileButton {...profileButton} />
        <div className="lg:hidden cursor-pointer">
          <MenuIcon />
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
