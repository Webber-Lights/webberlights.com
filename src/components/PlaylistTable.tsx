"use client";
import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect
import { cleanSequence } from "@/utils/FPPUtils"; // Adjust the path as needed
import { millisToMinutesAndSeconds } from "@/utils/time"; // Adjust the path as needed

interface SongData {
  songName: string;
  songArtist: string;
  duration: string;
}

interface PlaylistItem {
  sequenceName: string;
  duration: number;
}

interface PlaylistTableProps {
  playlist: {
    mainPlaylist: PlaylistItem[];
  };
  selectedSong: string;
}

function PlaylistTable({ playlist, selectedSong }: PlaylistTableProps) {
  const [songRows, setSongRows] = useState<SongData[]>([]);

  useEffect(() => {
    async function generateSongRows() {
      const rowsPromises = playlist.mainPlaylist.map(async (song) => {
        const cleanedSequence = await cleanSequence(song.sequenceName);
        return {
          songName: cleanedSequence.song,
          songArtist: cleanedSequence.artist,
          duration: millisToMinutesAndSeconds(song.duration),
        };
      });

      const rows = await Promise.all(rowsPromises);
      setSongRows(rows);
    }

    generateSongRows();
  }, [playlist]);

  return (
    <div className='overflow-x-auto rounded-lg mx-10 my-10 lg:mx-40 2xl:mx-80 justify-center'>
      <table className='w-full text-white text-sm text-left'>
        <thead className='text-xs uppercase bg-red-700 dark:bg-gray-700'>
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
          {songRows.map(({ songName, songArtist, duration }) => (
            <tr
              key={songName}
              className={
                songName === selectedSong
                  ? "font-bold bg-red-600 border-b hover:bg-gray-700"
                  : "border-b hover:bg-gray-700 bg-green-600"
              }
            >
              <td className='py-4 px-6'>{songName}</td>
              <td className='py-4 px-6'>{songArtist}</td>
              <td className='py-4 px-6'>{duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlaylistTable;
