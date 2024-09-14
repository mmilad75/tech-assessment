"use client";
import Section from "@/components/section";
import LastActivities from "@/components/last-activities";
import { communityBadges } from "@/server/mock-data";
import BadgesPreview from "@/components/badges-preview";
import CommunityBadges from "@/components/community-badges";
import useLogsQuery from "@/services/graphql/hooks/use-logs-query";

const Home: React.FC = () => {
  const { data: lastActivities, loading } = useLogsQuery();

  return (
    <>
      <Section title="Last Activities" className="mb-5">
        <LastActivities loading={loading} data={lastActivities} />
      </Section>
      <Section title="Badges">
        <BadgesPreview />
        <CommunityBadges title="Community Badges" badges={communityBadges} />
      </Section>
    </>
  );
};

export default Home;
