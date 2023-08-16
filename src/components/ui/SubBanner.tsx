import React from "react";

interface SubBannerProps {
  title: string;
  subtitle: string;
  image?: string; // Make the image prop optional
}
function SubBanner({ title, subtitle, image }: SubBannerProps) {
  const backgroundImage = image
    ? `url(${image})`
    : `url(/assets/images/2022_Show_Rainbow.jpg)`; // Default image URL

  return (
    <div
      className='w-full h-80 bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: backgroundImage }}
    >
      <div className='flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
            {title}
          </h1>
          <p className='text-base md:text-xl mb-3 font-medium'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default SubBanner;
