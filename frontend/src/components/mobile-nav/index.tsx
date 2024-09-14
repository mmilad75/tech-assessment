import TabButton, { ITabButtonProps } from "../tab-button";

export interface IMobileNavProps {
  tabs: ITabButtonProps[];
}

const MobileNav: React.FC<IMobileNavProps> = ({ tabs }) => {
  return (
    <nav className="container flex flex-wrap lg:hidden rounded-corner bg-elevation-1 p-3 my-6 gap-3">
      {tabs.map((tab, index) => (
        <TabButton key={index} {...tab} />
      ))}
    </nav>
  );
};

export default MobileNav;
