import { cleanSequence } from "@/utils/FPPUtils";
import { getFppStatus } from "@/lib/fpp";
import React from "react";

export default async function ShowStatus() {
  const fppStatus = await getFppStatus();
  
  let song = "";
  let artist = "";
  let isPlaying = false;

  if (fppStatus?.status_name === "playing" && fppStatus?.current_sequence) {
    isPlaying = true;
    try {
      let seq = await cleanSequence(fppStatus.current_sequence);
      song = seq.song;
      artist = seq.artist;
    } catch (error) {
      console.error("Error cleaning sequence:", error);
      isPlaying = false;
    }
  }

  return (
    <section className='flex flex-col p-2 justify-center items-center max-w-auto'>
      <div>
        <h2 className='text-4xl font-bold text-red-600'>Show Status</h2>
        <br />
        {isPlaying ? (
          <div>
            <h1 className='text-2xl font-bold'>Playing: </h1>
            <h2 className='text-xl'>Song: {song}</h2>
            <h3 className='text-xl'>Artist: {artist}</h3>
          </div>
        ) : (
          <h1>Not Playing</h1>
        )}
      </div>
    </section>
  );
}
