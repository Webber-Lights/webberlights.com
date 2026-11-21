import type { Metadata } from "next";
import GlobalNavigation from "@/components/ui/GlobalNavigation";
import "@/styles/globals.css";
import Footer from "@/components/ui/Footer";
import Snowfall from "@/components/SnowFall";

export const metadata: Metadata = {
  metadataBase: new URL("https://webberlights.com"),
  title: {
    default: "Webber Lights",
    template: "%s | Webber Lights",
  },
  description:
    "Award-winning synchronized Christmas light show in Cumberland, RI. Nightly Nov 29 – Jan 6. Tune to 89.5 FM and enjoy the show from your car.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Webber Lights",
    description: "Synchronized Christmas light display in Cumberland, RI.",
    url: "/",
    siteName: "Webber Lights",
    images: ["/assets/images/2024_Show.jpeg"],
    type: "website",
  },
};

const bannerText = process.env.NEXT_PUBLIC_BANNER_TEXT;
const showBanner =
  process.env.NEXT_PUBLIC_BANNER_ENABLED === "true" && !!bannerText;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scrollbar-hide overflow-y-scroll'>
      <body className='text-gray-100 min-h-screen font-inter h-full bg-[#21252B]'>
        <Snowfall />
        {/* Banner and nav share one fixed header so the banner never covers the nav. */}
        <header className='fixed top-0 w-full z-[100]'>
          {showBanner && (
            <div className='w-full bg-red-600 text-white py-2 px-4 text-center font-semibold text-sm md:text-base'>
              {bannerText}
            </div>
          )}
          <GlobalNavigation />
        </header>
        {showBanner && <div className='mt-9'></div>}
        <main className='flex flex-col'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
