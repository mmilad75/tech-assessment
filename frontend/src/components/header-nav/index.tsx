import HelpButton, { IHelpButtonProps } from "../help-button";
import Logo, { ILogoProps } from "../logo";
import ProfileButton, { IProfileButtonProps } from "../profile-button";
import TabButton, { ITabButtonProps } from "../tab-button";

export interface IHeaderNavProps {
  logo: ILogoProps;
  tabs: ITabButtonProps[];
  helpButton: IHelpButtonProps;
  profileButton: IProfileButtonProps
}

const HeaderNav:React.FC<IHeaderNavProps> = ({
  logo,
  tabs,
  helpButton,
  profileButton
}) => {
  return (
    <nav className="w-[1440px] h-[72px] flex items-center justify-center">
      <div className="w-[1280px] flex items-center px-7 justify-between">
        <div className="flex items-center">
          <Logo {...logo} />
          <div className="ml-6 flex">
            {tabs.map((tab, index) => (
              <TabButton key={index} {...tab} />
            ))}
          </div>
        </div>
        <div className="flex space-x-3">
          <HelpButton {...helpButton} />
          <ProfileButton {...profileButton} />
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav;