import cleanSequence from "utils/cleanSequence";

export async function getFPPStatus() {
  const fpp = await fetch('http://10.10.0.20/api/fppd/status');
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
export default async function handler(req, res) {
  const songs = await getFPPStatus()
  res.status(200).json(songs)
}