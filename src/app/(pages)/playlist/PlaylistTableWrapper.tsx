import PlaylistTable from "./PlaylistTable";
import { cleanSequence } from "@/utils/FPPUtils";
import { getFppPlaylist, getNowPlaying } from "@/lib/fpp";
import { secondsToMinutesAndSeconds } from "@/utils/time";

export default async function PlaylistTableWrapper() {
  const [playlist, nowPlaying] = await Promise.all([
    getFppPlaylist(),
    getNowPlaying(),
  ]);

  const rows = (playlist?.mainPlaylist ?? []).map((item) => {
    const { song, artist } = cleanSequence(item.sequenceName);
    return {
      songName: song,
      songArtist: artist,
      duration: secondsToMinutesAndSeconds(item.duration),
    };
  });

  return (
    <PlaylistTable
      rows={rows}
      selectedSong={nowPlaying.isPlaying ? nowPlaying.song : null}
    />
  );
}
