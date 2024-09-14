import { IBadgeProps } from "../badge";
import BadgesCarouselItemInactive from "./badges-carousel-item-inactive";
import BadgesCarouselItemActive from "./badges-carousel-item-actinve";

export interface IBadgesCarouselItem extends IBadgeProps {
  rewardDetails?: string;
}

export interface IBadgesCarouselItemProps {
  badge: IBadgesCarouselItem;
  isActive?: boolean;
  distance?: number;
  onClick?: () => void;
}
const BadgesCarouselItem: React.FC<IBadgesCarouselItemProps> = ({
  badge,
  isActive = false,
  distance = 1,
  onClick,
}) => {
  return (
    <div className="h-full flex items-center cursor-pointer" onClick={onClick}>
      {isActive ? (
        <BadgesCarouselItemActive {...badge} />
      ) : (
        <BadgesCarouselItemInactive
          title={badge.title}
          icon={badge.icon}
          distance={distance}
        />
      )}
    </div>
  );
};

export default BadgesCarouselItem;
