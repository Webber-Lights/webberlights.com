import React from 'react'

function ShowStatus({ status }) {
  return (
    <div>
          <h2 className="text-4xl font-bold text-red-600">Show Status</h2>
    <br />
    {status.isPlaying ? (
      <div>
        <h1 className="text-2xl font-bold">Playing: </h1>
        <h2 className="text-xl">Song: {status.songInfo.song}</h2>
        <h3 className="text-xl">Artist: {status.songInfo.artist}</h3>
      </div>
    ) : (
      <h1>Not Playing</h1>
    )}
  </div>
  )
}

export default ShowStatus