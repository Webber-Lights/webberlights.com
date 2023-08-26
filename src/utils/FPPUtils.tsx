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
