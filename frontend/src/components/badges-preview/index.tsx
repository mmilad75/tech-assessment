import { badgeProgress, badges } from "@/server/mock-data";
import BadgesCarousel from "../badges-carousel";
import MetricItemProgress from "../metric-item-progress";

export interface IBadgesPreviewProps {}

const BadgesPreview: React.FC<IBadgesPreviewProps> = () => {
  return (
    <div>
      <BadgesCarousel badges={badges} />
      <div className="mt-4 mb-5">
        <MetricItemProgress
          actions={badgeProgress.actions}
          totalEarnings={badgeProgress.totalEarnings}
        />
      </div>
    </div>
  );
};

export default BadgesPreview;
