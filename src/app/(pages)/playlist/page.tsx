import PlaylistTable from "./PlaylistTable";
import SubBanner from "@/components/ui/SubBanner";
import { cleanSequence } from "@/utils/FPPUtils";
const fallbackStatus = {
  status_name: "idle",
  current_sequence: null,
  message: "Fallback data",

};
const fallbackPlaylist = {
  "playlist": {
    "mainPlaylist": [
      {
        "sequenceName": "Not_Playing.fseq",
        "duration": 215000
      }
    ]
  },
  "selectedSong": "Not Playing"
}
const getFppStatus = async () => {
  try {
    const res = await fetch("http://100.117.192.60/api/fppd/status", {
    cache: "no-store",
  });
  if (!res.ok) {
    return null; // or {}
  }
  return res.json();
  } catch {
    return fallbackStatus; // or {}
  }
};
const getFppPlaylist = async () => {
  try {
  const res = await fetch("http://100.117.192.60/api/playlist/Show", {
    cache: "no-store",
  });
  if (!res.ok) {
    return null; // or {}
  }
  return res.json();
  } catch {
    return fallbackPlaylist; // or {}
  }
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
