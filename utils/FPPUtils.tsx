import cleanSequence from "./cleanSequence";
import { millisToMinutesAndSeconds } from "./time";

export async function getFPPStatus() {
    const fpp = await fetch(`${process.env.FPP_URL}/api/fppd/status`);
    const status = await fpp.json();
    let songInfo = cleanSequence(status.current_sequence)
  
    let isPlaying = false
    switch (status.status_name) {
      case 'idle':
        isPlaying = false;
        break;
      case 'playing':
        isPlaying = true;
        break;
      default:
        isPlaying = false;
        break;
    }
    return ({isPlaying, songInfo})
  }
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
  