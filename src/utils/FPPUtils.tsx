// export async function getFPPStatus() {
//   const fpp = await fetch(`${process.env.FPP_URL}/api/fppd/status`);
//   const status = await fpp.json();
//   let songInfo = cleanSequence(status.current_sequence);

//   let isPlaying = false;
//   switch (status.status_name) {
//     case "idle":
//       isPlaying = false;
//       break;
//     case "playing":
//       isPlaying = true;
//       break;
//     default:
//       isPlaying = false;
//       break;
//   }
//   return { isPlaying, songInfo };
// }

export async function cleanSequence(sequence) {
  let sequenceWithoutFilename = sequence.replace(/\.[^/.]+$/, "");
  let song = sequenceWithoutFilename;
  let artist = "";
  if (sequenceWithoutFilename.includes("-")) {
    let songWithArray = sequenceWithoutFilename.match(/.*(?=[-])/g);
    song = songWithArray[0];

    let artistWithDash = sequenceWithoutFilename.match(/\-(.*)/g);
    artist = artistWithDash[0].replace("-", "");
  }
  return { song, artist };
}
