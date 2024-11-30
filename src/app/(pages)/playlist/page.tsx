import PlaylistTable from "./PlaylistTable";
import SubBanner from "@/components/ui/SubBanner";
import { cleanSequence } from "@/utils/FPPUtils";

const getFppStatus = async () => {
  const res = await fetch("http://100.117.192.60/api/fppd/status", {
    cache: "no-store",
  });
  return res.json();
};
const getFppPlaylist = async () => {
  const res = await fetch("http://100.117.192.60/api/playlist/Show", {
    cache: "no-store",
  });
  return res.json();
};
export default async function Page() {
  const playlist = await getFppPlaylist();
  const status = await getFppStatus();
  let currentSong = await cleanSequence(status.current_sequence);
  let selectedSong = currentSong.song;
  return (
    <div>
      <SubBanner
        title='Show Playlist'
        subtitle="Tonight's List of songs for Webber Lights"
      />
      <PlaylistTable playlist={playlist} selectedSong={selectedSong} />
    </div>
  );
}
