import { YouTubeEmbed } from '@next/third-parties/google'
import { show } from '@/data/show'

export default function OurStory() {
  return (
    <section className='max-w-5xl mx-auto px-8 py-12 text-left'>
      <h2 className='text-4xl font-bold text-green-600 text-center mb-8'>Our Story</h2>

      <div className='grid gap-8 md:grid-cols-2 items-start'>
        <div className='space-y-4 text-lg leading-relaxed'>
          <p>
            What started in 2018 as a father-and-son project inspired by{' '}
            <em>The Great Christmas Light Fight</em> has grown into a beloved community
            tradition in Cumberland.
          </p>
          <p>
            This year&apos;s display features thousands of individually controlled lights,
            custom-built decorations, and a massive LED panel that works like an outdoor
            television. A brand-new prop joins the show this season, continuing the tradition
            of adding something new every year.
          </p>
          <p>
            For us, the greatest reward is seeing the smiles and holiday memories the show
            brings to visitors each year.
          </p>
        </div>

        <div>
          <YouTubeEmbed videoid={show.featuredVideo.id} />
          <p className='mt-2 text-sm text-center opacity-70'>{show.featuredVideo.title}</p>
        </div>
      </div>

      <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-center'>
        {show.stats.map(({ value, label }) => (
          <li key={label} className='rounded-lg border border-white/10 p-4'>
            <p className='text-3xl font-bold text-red-500'>{value}</p>
            <p className='text-sm opacity-80'>{label}</p>
          </li>
        ))}
      </ul>

      <h3 className='text-2xl font-bold text-center mt-12 mb-4'>Awards</h3>
      <ul className='flex flex-wrap justify-center gap-3'>
        {show.awards.map(({ year, title }) => (
          <li
            key={`${year}-${title}`}
            className='rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm'
          >
            <span className='font-bold text-yellow-300'>{year}</span> {title}
          </li>
        ))}
      </ul>
    </section>
  );
}
