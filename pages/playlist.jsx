import { getFPPShowPlaylist } from './api/show/playlist'
import { getFPPStatus } from './api/show/status';

export default function Home({ playlist, status }) {
  return (
    <div className="items-center justify-between text-center pb-12">
      <div
        class="w-full h-80 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(/assets/images/2022_Show_Rainbow.jpg)` }}
      >
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
            <h1 class="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
              {" "}
              Tonight&apos;s Playlist
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
              Tonight&apos;s List of songs for Webber Lights
            </p>{" "}
          </div>
        </div>
      </div>

      <div className=" overflow-x-auto sm:rounded-lg lg:mx-40 justify-center lg:px-40 lg:pt-20">
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
                  <td class="py-4 px-6">{songName}</td>
                  <td class="py-4 px-6">{songArtist}</td>
                  <td class="py-4 px-6">{duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const playlist = await getFPPShowPlaylist();
  const status = await getFPPStatus();

  return {
    props: { playlist, status }, // will be passed to the page component as props
    revalidate: 10, // props will be passed to the page
  };
}
