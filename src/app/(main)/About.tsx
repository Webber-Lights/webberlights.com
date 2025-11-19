import { GoogleMapsEmbed } from '@next/third-parties/google'


function About() {
  return (
    <div className='mb-8 p-8 justify-center max-w-5xl mx-auto'>

      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <h2 className='text-4xl font-bold text-red-600 '>Visit us Nightly<br />Nov 29 - Jan 6</h2>
          <h2 className='text-2xl mt-6'>Monday - Thursday: 5 - 9:30PM</h2>
          <h2 className='text-2xl'>Friday - Sunday: 5 - 10PM</h2>
          <div className='mt-6 uppercase'>TUNE TO FM 89.5 TO LISTEN</div>
      
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-4xl font-bold text-green-600'>Show Location</h2>
          <h2 className='text-xl'>32 Minerva Ave Cumberland, RI 02864</h2>
          <div className='bg-green-600 p-2 mt-6'>
          <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}
            mode='place'
            q='Webber+Lights,+32+Minerva+Ave,+Cumberland,+RI+02864'
            width='100%'
            loading='eager'
            height='400px'
            />
         </div>
        </div>
      </div>
    </div>
  );
}

export default About;
