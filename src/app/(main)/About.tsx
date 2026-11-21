import { GoogleMapsEmbed } from '@next/third-parties/google'
import { show } from '@/data/show'

function About() {
  return (
    <div className='mb-8 p-8 justify-center max-w-5xl mx-auto'>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/2'>
          <h2 className='text-4xl font-bold text-red-600'>
            Visit us Nightly
            <br />
            {show.season.opens} – {show.season.closes}
          </h2>
          <ul className='mt-6 space-y-1'>
            {show.hours.map(({ days, time }) => (
              <li key={days} className='text-2xl'>
                {days}: {time}
              </li>
            ))}
          </ul>
          <p className='mt-2 text-sm opacity-70'>Weather permitting</p>
          <p className='mt-6 uppercase'>Tune to {show.radio} to listen</p>
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-4xl font-bold text-green-600'>Show Location</h2>
          <address className='text-xl not-italic'>{show.address.line}</address>
          <a
            href={show.address.directionsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mt-4 px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 font-semibold text-white transition-colors'
          >
            Get Directions
          </a>
          <div className='bg-green-600 p-2 mt-6'>
            <GoogleMapsEmbed
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}
              mode='place'
              q={show.address.mapsQuery}
              width='100%'
              loading='lazy'
              height='400px'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
