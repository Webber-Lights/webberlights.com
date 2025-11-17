import Image from "next/image";
import React from "react";

function MainBanner() {
  return (
    <div
      className="relative w-full h-150 bg-cover bg-center bg-no-repeat text-center">
       <Image
        src="/assets/images/2022_Show_Rainbow.jpg"
        alt="Christmas light display"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-7xl mb-3 font-bold">Webber Lights</h1>
        <p className="text-base md:text-xl mb-6 font-medium">
          Synchronized Christmas Light Display in Cumberland, RI
        </p>
      </div>

      {/* Quote
      <div className="fixed bottom-0z-10 text-2xl font-extrabold pb-20 text-red-500  px-4">
        <p>
          &ldquo;Christmas isn&apos;t about candy canes, or lights all aglow,
          it&apos;s the hearts that we touch, and the care that we show.&ldquo;
        </p>
        <p>- Unknown</p>
      </div> */}
    </div>
  );
}

export default MainBanner;
