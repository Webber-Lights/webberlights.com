"use client";
import { useEffect, useState } from "react";
import type { NowPlaying } from "@/lib/fpp";

const REFRESH_MS = 15_000;

export default function LiveShowStatus({ initial }: { initial: NowPlaying }) {
  const [status, setStatus] = useState(initial);

  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      if (document.visibilityState !== "visible") return;
      try {
        const res = await fetch("/api/status", { cache: "no-store" });
        if (res.ok && !cancelled) setStatus(await res.json());
      } catch {
        // Keep showing the last known status if the request fails.
      }
    }

    const id = setInterval(refresh, REFRESH_MS);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      cancelled = true;
      clearInterval(id);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  return (
    <section
      className='flex flex-col p-6 justify-center items-center'
      aria-live='polite'
    >
      <h2 className='text-4xl font-bold text-red-600 mb-4'>Show Status</h2>
      {status.isPlaying ? (
        <div className='flex flex-col items-center gap-1'>
          <span className='flex items-center gap-2 text-sm uppercase tracking-wider text-green-400'>
            <span className='relative flex h-3 w-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:hidden' />
              <span className='relative inline-flex h-3 w-3 rounded-full bg-green-500' />
            </span>
            Now Playing
          </span>
          <p className='text-2xl font-bold'>{status.song}</p>
          {status.artist && <p className='text-xl opacity-80'>{status.artist}</p>}
        </div>
      ) : (
        <p className='text-xl opacity-80'>
          The show isn&apos;t running right now. Check the hours below!
        </p>
      )}
    </section>
  );
}
