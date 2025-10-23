import PlaylistTable from "./PlaylistTable";
import { cleanSequence } from "@/utils/FPPUtils";
import { getFppStatus, getFppPlaylist } from "@/lib/fpp";

export default async function PlaylistTableWrapper() {
  const [playlist, status] = await Promise.all([
    getFppPlaylist(),
    getFppStatus()
  ]);

  let selectedSong = "Not Playing";

  if (status?.current_sequence) {
    try {
      let currentSong = await cleanSequence(status.current_sequence);
      selectedSong = currentSong.song;
    } catch (error) {
      console.error("Error cleaning sequence:", error);
    }
  }

  return <PlaylistTable playlist={playlist} selectedSong={selectedSong} />;
}
