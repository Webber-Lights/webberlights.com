import { Suspense } from 'react';
import SubBanner from "@/components/ui/SubBanner";
import PlaylistTableWrapper from "@/components/PlaylistTableWrapper";
import PlaylistTableSkeleton from "@/components/PlaylistTableSkeleton";

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