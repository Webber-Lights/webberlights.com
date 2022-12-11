'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

import NavLogo from 'public/assets/images/WL_Logo.png'

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const pathname = usePathname();

  const MenuItems = [
    {
      label: 'Home',
      url: "/",
      active: true,
    },
    {
      label: "Tonight's Playlist",
      url: "/playlist",
      active: true,
    },
    {
      label: 'News',
      url: "/blog",
      active: true,
    },
   {
      label: 'Q & A',
      url: "/q-a",
      active: true,
    },
    {
      label: 'Donate',
      url: "/donate",
      active: false,
    },
  ];
  
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 250) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#21252B]  border-b border-grey'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
        <Link href='/'>
        
            <Image
              src={NavLogo}
              alt='/'
              width='50'
              height='50'
              className='cursor-pointer rounded-full'
            />

        </Link>
        <div>
        <div className="hidden md:flex mt-12">
       {MenuItems.map((item, index) => {
        return (
        
            <Link href={item.url} key={index}>
              <div
                className={`w-auto px-6 h-24 text-center mt-3 cursor-pointer  ${
                  pathname === item.url
                    ? "text-blue-600"
                    : "text-white"
                }`}
              >
                <p className="text-secondary-300 hover:scale-110">{item.label}</p>
              </div>
            </Link>
     
        );
      })}
</div>
          <div
            style={{ color: `#fff` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#282C34] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
               
                  <Image
                    src={NavLogo}
                    width='87'
                    height='70'
                    alt='/'
                  />
               
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
            </div>
          </div>
          <div className='py-2 flex flex-col'>
            <ul className=''>
            {MenuItems.map((item, index) => {
        return (
        
            <Link href={item.url} key={index}>
              <div
                onClick={() => setNav(false)}
                className={`py-4 text-center mt-3 cursor-pointer  ${
                  pathname === item.url
                    ? "text-blue-600"
                    : "text-white"
                }`}
              >
                <p className="text-secondary-300 hover:scale-110">{item.label}</p>
              </div>
            </Link>
     
        );
      })}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;