import Badge, { IBadgeProps } from "../badge";

export interface ICommunityBadgesProps {
  title: string;
  badges: IBadgeProps[];
}

const CommunityBadges: React.FC<ICommunityBadgesProps> = ({
  title,
  badges,
}) => {
  return (
    <div className="bg-elevation-2 rounded-xl">
      <header className="flex h-9 px-5 content-center items-center">
        <h2>{title}</h2>
      </header>
      <div className="flex pt-4 pb-2 bg-elevation-1 rounded-b-xl">
        <div className="flex overflow-auto pb-6 mb-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex-shrink-0 mr-4">
              <Badge {...badge} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityBadges;
