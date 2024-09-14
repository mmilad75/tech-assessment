import Badge from "../badge";
import { IBadgesCarouselItem } from "./badges-carousel-item";

const BadgesCarouselItemActive: React.FC<IBadgesCarouselItem> = (badge) => {
  return (
    <div className="w-full">
      <Badge
        state={badge.state}
        earned={badge.earned}
        title={badge.title}
        actionsCount={badge.actionsCount}
        amount={badge.amount}
        icon={badge.icon}
      />
      <div className="text-xs font-medium text-center leading-normal mt-3 py-2 px-5 bg-elevation-2 rounded-content">
        <p>Reward Details</p>
        <p className="text-text-secondary">{badge.rewardDetails}</p>
      </div>
    </div>
  );
};

export default BadgesCarouselItemActive;
