import React from 'react'

function PlaylistTable({ playlist, status}) {
  return (
    <div className="overflow-x-auto rounded-lg mx-10 mt-10 lg:mx-40 2xl:mx-80 justify-center">
    <table className="w-full text-white text-sm text-left">
      <thead className="text-xs uppercase bg-red-700 dark:bg-gray-700 ">
        <tr>
          <th scope="col" className="py-3 px-6">
            Song
          </th>
          <th scope="col" className="py-3 px-6">
            Artist
          </th>
          <th scope="col" className="py-3 px-6">
            Duration
          </th>
        </tr>
      </thead>
      <tbody>
        {playlist.songs.map(({ songName, songArtist, duration }) => {
          return (
            <tr
              key={songName}
              className={
                songName === status.songInfo.song
                  ? "font-bold bg-red-600 border-b hover:bg-gray-50 "
                  : "border-b hover:bg-gray-700 bg-green-600"
              }
            >
              <td className="py-4 px-6">{songName}</td>
              <td className="py-4 px-6">{songArtist}</td>
              <td className="py-4 px-6">{duration}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )
}

export default PlaylistTable