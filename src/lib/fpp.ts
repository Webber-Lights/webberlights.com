const fallbackStatus = {
  status_name: "idle",
  current_sequence: null,
  message: "Unable to connect to FPP device",
};

const fallbackPlaylist = {
    "mainPlaylist": [
      {
        "sequenceName": "Not-Playing.fseq",
        "duration": 0
      }
    ]
};

export async function getFppStatus() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    const res = await fetch("http://100.117.192.60/api/fppd/status", {
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

    const res = await fetch("http://100.117.192.60/api/playlist/Show", {
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
