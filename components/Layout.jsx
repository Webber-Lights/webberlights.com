import React, { useCallback, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Snowfall from 'react-snowfall'
import SEO from './seo'

function Layout({ children }) {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }  
  return (
    <div className="scrollbar-hide overflow-y-scroll">
      <SEO />
    <Snowfall style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  }} snowflakeCount={100}/>
    <div className=" flex flex-col text-gray-100 min-h-screen font-inter h-full">
        <Snowfall />
        <Header />
        <main className="flex-1 justify-center bg-[#21252B] ">
        {children}
        <Footer />
        </main>
    </div>
    </div>
  )
}

export default Layout