import Section from "@/components/section";
import LastActivities from "@/components/last-activities";
import { lastActivities } from "@/server/mock-data";

export default function Home() {
  return (
    <>
      <Section title="Last Activities" className="mb-5">
        <LastActivities data={lastActivities} />
      </Section>
    </>
  );
}
