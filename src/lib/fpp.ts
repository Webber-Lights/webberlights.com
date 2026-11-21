import { cleanSequence } from "@/utils/FPPUtils";

const FPP_URL = process.env.FPP_URL || "http://10.32.60.10";

const fallbackStatus = {
  status_name: "idle",
  current_sequence: null,
  message: "Unable to connect to FPP device",
};

const fallbackPlaylist: { mainPlaylist: { sequenceName: string; duration: number }[] } = {
  mainPlaylist: [],
};

export async function getFppStatus() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    const res = await fetch(`${FPP_URL}/api/fppd/status`, {
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return fallbackStatus;
    }
    return await res.json();
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn('FPP status request timed out');
    }
    return fallbackStatus;
  }
}

export async function getFppPlaylist() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    const res = await fetch(`${FPP_URL}/api/playlist/Show`, {
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return fallbackPlaylist;
    }
    return await res.json();
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn('FPP playlist request timed out');
    }
    return fallbackPlaylist;
  }
}

export interface NowPlaying {
  isPlaying: boolean;
  song: string;
  artist: string;
}

export async function getNowPlaying(): Promise<NowPlaying> {
  const status = await getFppStatus();
  if (status?.status_name === "playing" && status?.current_sequence) {
    const { song, artist } = cleanSequence(status.current_sequence);
    return { isPlaying: true, song, artist };
  }
  return { isPlaying: false, song: "", artist: "" };
}
