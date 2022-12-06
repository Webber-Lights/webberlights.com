import cleanSequence from "utils/cleanSequence";
import { millisToMinutesAndSeconds } from "utils/time";

export async function getFPPShowPlaylist() {
    const fpp = await fetch(`${process.env.FPP_URL}/api/playlist/Show`);
    const playlist = await fpp.json();

    const songs = playlist.mainPlaylist.reduce((acc, song) => {
        let clenedSequence = cleanSequence(song.sequenceName)
        acc.push({songName: clenedSequence.song, songArtist: clenedSequence.artist, duration: millisToMinutesAndSeconds(song.duration)});
        return acc;
      }, []);
    return {songs};
  }
  
export default async function handler(req, res) {
  const songs = await getFPPShowPlaylist()
  res.status(200).json(songs)
}