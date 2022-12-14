import GlobalNavigation from 'components/ui/GlobalNavigation'
import 'app/globals.css'
import Footer from 'components/ui/Footer'
export default function RootLayout({ children }) {
      return (
        <html lang="en" className="scrollbar-hide overflow-y-scroll">
      <head>
        <title>Webber Lights</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="text-gray-100 min-h-screen font-inter h-full bg-[#21252B]">
        <header>
          <GlobalNavigation />
        </header>
        <main className="flex flex-col" >{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
        </html>
      )
  }