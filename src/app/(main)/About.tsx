function About() {
  return (
    <div className='my-8 p-8 justify-center '>
      <div className='flex flex-col md:flex-row p-6 justify-center'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold text-red-600'>Show Hours</h2>
          <h2 className='text-2xl'>Monday - Thursday: 5 - 9:30PM</h2>
          <h2 className='text-2xl'>Friday - Sunday: 5 - 10PM</h2>
        </div>
        <div className='ml-8'>
          <h2 className='text-4xl font-bold text-green-600'>Show Location</h2>
          <h2 className='text-2xl'>32 Minerva Ave</h2>
          <h2 className='text-2xl'>Cumberland, RI 02864</h2>
        </div>
      </div>
      <div>
        <h3 className='text-3xl mb-4 '>
          What is{" "}
          <span className='text-red-600'>
            Webber <span className='text-green-500'>Lights</span>
          </span>
          ?
        </h3>
        <p className='text-lg  lg:mx-40 2xl:mx-80 mb-4 justify-center'>
          Webber Lights is a Computer-controlled Christmas Light display Located
          in Cumberland, RI. Our Christmas light display has been animated since
          2018. before then, we had put up Christmas lights as a family
          tradition. Check out our Facebook page for more details on song lists,
          blogs, and projects. The Facebook page gets updated more often than
          this page. Please refer to it first. I have always watched the “Great
          Christmas Light Fight” and wondered if I could learn how to do it.
          Since then, I have had a passion for Christmas lights and the Spirit
          of Christmas!
        </p>
      </div>
    </div>
  );
}

export default About;
