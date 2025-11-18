import { getAllTimelineMetadata } from "@/lib/timeline";
import { VerticalTimeline } from "./Timeline";
import SubBanner from "@/components/ui/SubBanner";

export default async function TimelineIndex() {
  const years = await getAllTimelineMetadata();
  return (
    <div>
     <SubBanner
            title="Timeline"
            subtitle="A Journey Through Our Light Shows Over the Years"
        />
    <VerticalTimeline years={years} />
    </div>
  );
}
