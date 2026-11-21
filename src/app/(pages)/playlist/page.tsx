import { Suspense } from 'react';
import SubBanner from "@/components/ui/SubBanner";
import PlaylistTableWrapper from "./PlaylistTableWrapper";
import PlaylistTableSkeleton from "./PlaylistTableSkeleton";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tonight's Playlist",
  description: "The songs playing tonight at Webber Lights.",
};

export default function Page() {
  return (
    <div>
      <SubBanner
        title='Show Playlist'
        subtitle="Tonight's List of songs for Webber Lights"
      />
      <Suspense fallback={<PlaylistTableSkeleton />}>
        <PlaylistTableWrapper />
      </Suspense>
    </div>
  );
}