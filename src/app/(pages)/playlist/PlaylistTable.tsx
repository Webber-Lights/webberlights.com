"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export interface SongRow {
  songName: string;
  songArtist: string;
  duration: string;
}

interface PlaylistTableProps {
  rows: SongRow[];
  selectedSong: string | null;
}

const REFRESH_MS = 15_000;

function PlaylistTable({ rows, selectedSong }: PlaylistTableProps) {
  const router = useRouter();

  // Re-fetch the server data periodically so the "now playing" highlight stays current.
  useEffect(() => {
    const id = setInterval(() => {
      if (document.visibilityState === "visible") router.refresh();
    }, REFRESH_MS);
    return () => clearInterval(id);
  }, [router]);

  if (rows.length === 0) {
    return (
      <p className='text-center text-xl opacity-80 my-16 px-4'>
        Tonight&apos;s playlist isn&apos;t available right now. Check back during show hours!
      </p>
    );
  }

  return (
    <div className='overflow-x-auto rounded-lg mx-4 my-10 md:mx-10 lg:mx-40 2xl:mx-80 justify-center'>
      <table className='w-full text-white text-sm text-left'>
        <thead className='text-xs uppercase bg-red-700'>
          <tr>
            <th scope='col' className='py-3 px-6'>
              Song
            </th>
            <th scope='col' className='py-3 px-6'>
              Artist
            </th>
            <th scope='col' className='py-3 px-6'>
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ songName, songArtist, duration }, index) => {
            const isCurrent = songName === selectedSong;
            return (
              <tr
                key={`${index}-${songName}`}
                aria-current={isCurrent ? "true" : undefined}
                className={
                  isCurrent
                    ? "font-bold bg-red-600 border-b hover:bg-gray-700"
                    : "border-b hover:bg-gray-700 bg-green-600"
                }
              >
                <td className='py-4 px-6'>{songName}</td>
                <td className='py-4 px-6'>{songArtist}</td>
                <td className='py-4 px-6'>{duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlaylistTable;
