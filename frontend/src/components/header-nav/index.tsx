import HelpButton, { IHelpButtonProps } from "../help-button";
import Logo from "../logo";
import ProfileButton, { IProfileButtonProps } from "../profile-button";
import TabButton, { ITabButtonProps } from "../tab-button";

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
    <header className="container h-[72px] flex h-ful items-center px-7 justify-between">
      <div className="flex flex-grow items-center">
        <Logo />
        <nav className="ml-6 flex">
          {tabs.map((tab, index) => (
            <TabButton key={index} {...tab} />
          ))}
        </nav>
      </div>
      <div className="flex space-x-3">
        <HelpButton {...helpButton} />
        <ProfileButton {...profileButton} />
      </div>
    </header>
  );
};

export default HeaderNav;
