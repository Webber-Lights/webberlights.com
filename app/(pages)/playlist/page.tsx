import About from "components/main/About";
import PlaylistTable from "components/playlist/PlaylistTable";
import SubBanner from "components/ui/SubBanner";
import { getFPPShowPlaylist, getFPPStatus } from "utils/FPPUtils";

export default async function Page() {
    const songData = getFPPShowPlaylist();
    const statusData = getFPPStatus();

    const [songs, status] = await Promise.all([songData, statusData]);
  return (
    <div>
        <SubBanner title="About" subtitle="Learn more about the show" />
        <PlaylistTable playlist={songs} status={status} />
      <section className="flex flex-col   p-2 justify-center items-center max-w-auto">
        {/* <ShowStatus status={status} /> */}
      </section>
    </div>
  );
}
