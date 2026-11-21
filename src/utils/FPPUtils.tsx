/**
 * Turns an FPP sequence filename like "Carol of the Bells-Trans-Siberian Orchestra.fseq"
 * into { song, artist }.
 *
 * Separator rules (applied consistently so song + artist always reconstruct the name):
 *  - If the name contains " - " (spaced dash), split on the first one.
 *  - Otherwise split on the first "-", so hyphenated artist names stay intact.
 */
export function cleanSequence(sequence?: string | null) {
  if (!sequence) {
    return { song: "Unknown", artist: "Unknown" };
  }

  const name = sequence.replace(/\.[^/.]+$/, "").trim();
  const separator = name.includes(" - ") ? " - " : "-";
  const index = name.indexOf(separator);

  if (index === -1) {
    return { song: name, artist: "" };
  }

  return {
    song: name.slice(0, index).trim(),
    artist: name.slice(index + separator.length).trim(),
  };
}
