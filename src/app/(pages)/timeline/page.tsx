import { getAllTimelineMetadata } from "@/lib/timeline";
import { VerticalTimeline } from "./Timeline";
import SubBanner from "@/components/ui/SubBanner";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Show Timeline",
  description: "A journey through the Webber Lights shows over the years.",
};

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
