import Section from "@/components/section";
import LastActivities from "@/components/last-activities";
import { communityBadges, lastActivities } from "@/server/mock-data";
import BadgesPreview from "@/components/badges-preview";
import CommunityBadges from "@/components/community-badges";

export default function Home() {
  return (
    <>
      <Section title="Last Activities" className="mb-5">
        <LastActivities data={lastActivities} />
      </Section>
      <Section title="Badges">
        <BadgesPreview />
        <CommunityBadges title="Community Badges" badges={communityBadges} />
      </Section>
    </>
  );
}
