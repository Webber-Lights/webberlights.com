import Image from 'next/image';

export const SingleArticle = ({ author, image, category, title, children }) => {
  return (
    <div className='px-4 py-6'>
      <div className='mx-auto max-w-prose'>
        <p className='block text-center text-base font-semibold uppercase tracking-wide text-indigo-600'>
          {category}
        </p>
        <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-50 sm:text-4xl'>
          {title}
        </h1>
        <br />
        <Image
          className='lg:h-48 md:h-36 w-full object-cover object-center'
          src={image}
          width={720}
          height={400}
          alt='blog'
        />
        <hr />
        <br />
        <div className='flex items-center pb-6'>
          <Image src={author.image} width={50} height={50} alt='blog' />

          <div className="ml-4">
            <strong>{author.name}</strong>
            <br />
            <span>Technical advisor</span>
          </div>
        </div>
        {/* <article className='mx-autotext-white prose-md prose prose-neutral prose-invert py-24 lg:prose-lg'> */}
                <article className='text-white prose prose-h3:text-5xl prose-h3:text-white'>

          {children}
        </article>
      </div>
    </div>
  );
};